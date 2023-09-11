import { Component } from '@angular/core';
import { Question, Level, Category } from '../../interfaces/answerQuestion.interface';

@Component({
  selector: 'shared-answer-question',
  templateUrl: './answer-question.component.html',
  styleUrls: ['./answer-question.component.css']
})
export class AnswerQuestionComponent {

  // public show: boolean = false;
  public hide: boolean  = false;

  // public switchFavorite( question: Question ): void {

  //   question.favorite = !question.favorite
  //   console.log({question});
  // }

  // public showHide( question: Question ): void {

  //   console.log( {question} );

  //   if ( question.expanded === false ) {

  //     question.expanded = true;
  //     this.hide = false;

  //   } else {

  //     question.expanded = false;
  //     this.hide = true;
  //   }
  //   console.log( {question} );
  // }

  public questions: Question[] = [
    {
      id: 1,
      level: Level["Middle"],
      category: Category["Angular"],
      question: "Question 1",
      answer: "This is the first Answer"
    },
    {
      id: 2,
      level: Level["Middle"],
      category: Category["Angular"],
      question: "Question 2",
      answer: "This is the second Answer"
    }
]

}
