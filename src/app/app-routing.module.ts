import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContentPageComponent } from './pages/content-page/content-page.component';
import { LoginPageComponent } from './auth/pages/login/login-page.component';
import { RegisterComponent } from './auth/pages/register/register.component';

const routes: Routes = [
  {
    path: 'home-page',
    component: HomePageComponent
  },
  {
    path: 'content-page',
    component: ContentPageComponent
  },
   {
     path: 'login',
     component: LoginPageComponent
   },
   {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: 'home-page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
