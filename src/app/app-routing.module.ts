import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContentPageComponent } from './pages/content-page/content-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { UserDataComponent } from './pages/components/user-data/user-data.component';
import { FavoritesComponent } from './pages/components/favorites/favorites.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { LoginPageComponent } from './auth/pages/login/login-page.component';
import { EditUserComponent } from './pages/components/edit-user/edit-user.component';

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
    path: 'profile-page',
    component: ProfilePageComponent,
    children: [
      { path: 'data', 
        component: UserDataComponent,
        children:[
          { path: 'edit/:id', 
            component: EditUserComponent
          }
        ] 
      },
      { path: 'favorites', component: FavoritesComponent },
      { path: '', redirectTo: 'data', pathMatch: 'full' } 
    ]
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