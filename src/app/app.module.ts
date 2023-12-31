import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],

  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PagesModule,
    SharedModule,
    NgbModule,
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
