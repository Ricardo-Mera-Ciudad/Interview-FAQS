import { Component, inject } from '@angular/core';
import {
  Question,
  Level,
  Category,
} from '../../interfaces/answerQuestion.interface';
import { PagesService } from 'src/app/pages/services/pages.service';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { DataService } from 'src/app/pages/services/data.service';

@Component({
  selector: 'shared-answer-question',
  templateUrl: './answer-question.component.html',
  styleUrls: ['./answer-question.component.css'],
})
export class AnswerQuestionComponent {
  public questions: Question[] = [];


  public answerVisibility: { [key: number]: boolean } = {};
  public borderRadiusState: { [key: number]: boolean } = {};

  private pagesService = inject(PagesService);
  public category: string = 'Angular';
  public level: string = 'Middle';


  private unsubscribe$ = new Subject<void>();
  private dataService = inject(DataService);

  constructor() {
    this.questions.forEach((question) => {
      this.answerVisibility[question.id] = false;
      this.borderRadiusState[question.id] = false;
    });
  }
  ngOnInit(): void {
    this.getFaqs()
    this.loadCategory();
  }

  getFaqs() {
    this.pagesService.selectedCategory$
      .pipe(
        switchMap((selectedCategory) =>
        this.dataService.getQuestionsAndAnswers(selectedCategory))
    ).subscribe((questions: Question[]) => {
      this.questions = questions;
    })
  }

  loadCategory() {
    this.pagesService.selectedCategory$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (categoryFromService) => (this.category = categoryFromService)
      );
    this.pagesService.selectedLevel$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((levelFromService) => (this.level = levelFromService));
  }

  showAnswer(id: number) {
    this.answerVisibility[id] = !this.answerVisibility[id];
    this.borderRadiusState[id] = this.answerVisibility[id];
  }

  getCategoryImage(category: string): string {
    let imgUrl: string = "";

    switch(category) {
      case 'Angular':
        imgUrl = "../../../../assets/images/angular.png";
        break;
      case 'Html':
        imgUrl = "../../../../assets/images/html.png";
        break;
      case 'Css':
        imgUrl = "../../../../assets/images/css.png";
        break;
      case 'Javascript':
        imgUrl = "../../../../assets/images/javascript.png";
        break;
      case 'Typescript':
        imgUrl = "../../../../assets/images/typescript.png";
        break;
      case 'Softskills':
        imgUrl = "";
        break;
      case 'Webmetrics':
        imgUrl = "";
        break;
      case 'Webpacks':
        imgUrl = "";
        break;
    }
    return imgUrl;

  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
