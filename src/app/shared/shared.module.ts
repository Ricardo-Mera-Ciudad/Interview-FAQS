import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelcardsComponent } from './components/levelcards/levelcards.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({

  declarations: [LevelcardsComponent,
  HeaderComponent,
  FooterComponent],

  imports: [
    CommonModule,

  ],
  exports: [
    LevelcardsComponent,
    HeaderComponent,
    FooterComponent
  ],

})
export class SharedModule { }
