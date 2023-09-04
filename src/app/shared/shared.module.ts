import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelcardsComponent } from './components/levelcards/levelcards.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    LevelcardsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    LevelcardsComponent,
    HeaderComponent

  ]
})
export class SharedModule { }
