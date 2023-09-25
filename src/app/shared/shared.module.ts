import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AnswerQuestionComponent } from './components/answer-question/answer-question.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LevelcardsComponent } from './components/levelcards/levelcards.component';


@NgModule({
  declarations: [
    AnswerQuestionComponent,
    FooterComponent,
    HeaderComponent,
    LevelcardsComponent,
  ],

  imports: [
    CommonModule,
    RouterModule],

  exports: [
    AnswerQuestionComponent,
    FooterComponent,
    HeaderComponent,
    LevelcardsComponent,
  ],
})
export class SharedModule { }
