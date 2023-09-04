import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelcardsComponent } from './components/levelcards/levelcards.component';



@NgModule({
  declarations: [LevelcardsComponent],
  imports: [
    CommonModule
  ], 
  exports: [
    LevelcardsComponent,
  ]
})
export class SharedModule { }
