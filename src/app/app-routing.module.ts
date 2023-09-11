import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContentPageComponent } from './pages/content-page/content-page.component';
import { LoginPageComponent } from './pages/components/login/login-page.component';


const routes: Routes = [
  {
    path: 'home-page',
    component: HomePageComponent
  },
  {
    path: 'content-page',
    component: ContentPageComponent
  },
  // {
  //   path: 'login-page',
  //   component: LoginPageComponent
  // },
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
