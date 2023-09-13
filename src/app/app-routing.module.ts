import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContentPageComponent } from './pages/content-page/content-page.component';
import { LoginPageComponent } from './pages/components/login/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { UserDataComponent } from './pages/components/user-data/user-data.component';
import { FavoritesComponent } from './pages/components/favorites/favorites.component';

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
    path: 'profile-page',
    component: ProfilePageComponent,
    children: [
      { path: 'data', component: UserDataComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: '', redirectTo: 'datos', pathMatch: 'full' } // Ruta por defecto dentro del perfil
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
