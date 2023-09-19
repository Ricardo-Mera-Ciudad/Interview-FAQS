import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { HtmlQuestionsComponentComponent } from './components/html-questions-component/html-questions-component.component';
import { CssQuestionsComponentComponent } from './components/css-questions-component/css-questions-component.component';
import { JavascriptQuestionsComponentComponent } from './components/javascript-questions-component/javascript-questions-component.component';
import { AngularQuestionsComponentComponent } from './components/angular-questions-component/angular-questions-component.component';
import { MainCircleComponent } from './components/main-circle/main-circle.component';
import { RouterModule } from '@angular/router';
import { TypescriptQuestionsComponentComponent } from './components/typescript-questions-component/typescript-questions-component.component';
import { SharedModule } from '../shared/shared.module';
import { SoftskillsQuestionsComponentComponent } from './components/softskills-questions-component/softskills-questions-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { GitQuestionsComponentComponent } from './components/git-questions-component/git-questions-component.component';
import { WeblinksQuestionsComponentComponent } from './components/weblinks-questions-component/weblinks-questions-component.component';



@NgModule({
  declarations: [
    HomePageComponent,
    
    ContentPageComponent,
    HtmlQuestionsComponentComponent,
    CssQuestionsComponentComponent,
    JavascriptQuestionsComponentComponent,
    AngularQuestionsComponentComponent,
    MainCircleComponent,
    TypescriptQuestionsComponentComponent,
    SoftskillsQuestionsComponentComponent,
    WeblinksQuestionsComponentComponent,
    GitQuestionsComponentComponent,
    ProfilePageComponent,
    UserDataComponent,
    FavoritesComponent
  
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    HomePageComponent,
    
  
  ]

})
export class PagesModule { }
