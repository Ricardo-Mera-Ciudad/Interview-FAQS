import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';
import { UserDataComponent } from './pages/components/user-data/user-data.component';
import { FavoritesComponent } from './pages/components/favorites/favorites.component';

@NgModule({
  declarations: [AppComponent, UserDataComponent, FavoritesComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PagesModule,
    HttpClientModule
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
