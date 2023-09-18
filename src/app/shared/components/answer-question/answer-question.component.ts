import { Component, inject } from '@angular/core';
import {
  Question,
  Level,
  Category,
} from '../../interfaces/answerQuestion.interface';
import { PagesService } from 'src/app/pages/services/pages.service';
import { Subject, combineLatest, switchMap, takeUntil } from 'rxjs';
import { DataService } from 'src/app/pages/services/data.service';
import { UserFavs } from '../../interfaces/user-data.interface';
import { UsersService } from 'src/app/auth/services/users.service';

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
  public level: string | null = null;

  public favouriteQuestion: UserFavs[] = [];
  public isFavouritedSelected: boolean = false;

  private unsubscribe$ = new Subject<void>();
  private dataService = inject(DataService);
  private usersService = inject(UsersService);

  constructor() {}
  ngOnInit(): void {
    this.loadCategory();
  }

  favouriteStatus() {
    this.usersService.getAuthenticatedUserSubject().subscribe((user) => {
     const userId = user!.id
    })
  }

  getFaqs() {
    this.pagesService.selectedCategory$
      .pipe(
        switchMap((selectedCategory) => {
            return this.dataService.getQuestions(selectedCategory, this.level!);
        })
      )
      .subscribe((questions: Question[]) => {
        this.questions = questions;
        this.questions.forEach((question) => {
          this.answerVisibility[question.id] = false;
          this.borderRadiusState[question.id] = false;
        });
        console.log(this.questions)
      });
  }


  loadCategory() {
    combineLatest([
      this.pagesService.selectedCategory$,
      this.pagesService.selectedLevel$,
    ])
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(([categoryFromService, levelFromService]) => {
        this.category = categoryFromService;
        this.level = levelFromService;
        this.getFaqs();
      });
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
