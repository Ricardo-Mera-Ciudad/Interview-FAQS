import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { HtmlQuestionsComponentComponent } from './components/html-questions-component/html-questions-component.component';
import { CssQuestionsComponentComponent } from './components/css-questions-component/css-questions-component.component';
import { JavascriptQuestionsComponentComponent } from './components/javascript-questions-component/javascript-questions-component.component';
import { AngularQuestionsComponentComponent } from './components/angular-questions-component/angular-questions-component.component';
import { MainCircleComponent } from './components/main-circle/main-circle.component';
import { RouterModule } from '@angular/router';
import { TypescriptQuestionsComponentComponent } from './components/typescript-questions-component/typescript-questions-component.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomePageComponent,
    LoginPageComponent,
    ContentPageComponent,
    HtmlQuestionsComponentComponent,
    CssQuestionsComponentComponent,
    JavascriptQuestionsComponentComponent,
    AngularQuestionsComponentComponent,
    MainCircleComponent,
    TypescriptQuestionsComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    HomePageComponent
  ]

})
export class PagesModule { }
