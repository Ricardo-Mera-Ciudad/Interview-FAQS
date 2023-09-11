import { Component, inject } from '@angular/core';
import { Question, Level, Category } from '../../interfaces/answerQuestion.interface';
import { PagesService } from 'src/app/pages/services/pages.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'shared-answer-question',
  templateUrl: './answer-question.component.html',
  styleUrls: ['./answer-question.component.css']
})
export class AnswerQuestionComponent {

  public questions: Question[] = [
    {
      id: 1,
      level: Level["Middle"],
      category: Category["Angular"],
      question: "This is Question 1 Title",
      answer: "This is the first Answer"
    },
    {
      id: 2,
      level: Level["Middle"],
      category: Category["Angular"],
      question: "This is the Question 2 Title",
      answer: "This is the second Answer"
    }
  ]

  public answerVisibility: { [key: number]: boolean } = {};

  private pagesService = inject(PagesService)
  public category : string = 'Angular';
  public level    : string = 'Middle';

  private unsubscribe$ = new Subject<void>();

  constructor() {
      this.questions.forEach((question) => {
      this.answerVisibility[question.id] = false;
    });
  }
  ngOnInit(): void {
    this.loadCategory();
  }

  loadCategory(){
    this.pagesService.selectedCategory$
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(categoryFromService => this.category = categoryFromService);
    this.pagesService.selectedLevel$
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(levelFromService => this.level = levelFromService);
  }

  showAnswer(id: number) {
    // Cambiar la visibilidad de la respuesta para la pregunta con el ID proporcionado
    this.answerVisibility[id] = !this.answerVisibility[id];
  }

  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }




}
