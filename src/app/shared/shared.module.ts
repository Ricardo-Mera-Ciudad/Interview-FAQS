import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelcardsComponent } from './components/levelcards/levelcards.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AnswerQuestionComponent } from './components/answer-question/answer-question.component';



@NgModule({

  declarations: [LevelcardsComponent,
  HeaderComponent,
<<<<<<< HEAD
  FooterComponent,
  AnswerQuestionComponent],

  imports: [
    CommonModule
=======
  FooterComponent],

  imports: [
    CommonModule,

>>>>>>> main
  ],
  exports: [
    LevelcardsComponent,
    HeaderComponent,
<<<<<<< HEAD
    FooterComponent,
    AnswerQuestionComponent
  ]
=======
    FooterComponent
  ],

>>>>>>> main
})
export class SharedModule { }
