import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LevelcardsComponent } from './shared/components/levelcards/levelcards.component';
import { AngularComponent } from './pages/angular/angular.component';
import { Html5Component } from './pages/html5/html5.component';
import { Css3Component } from './pages/css3/css3.component';
import { JavascriptComponent } from './pages/javascript/javascript.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
