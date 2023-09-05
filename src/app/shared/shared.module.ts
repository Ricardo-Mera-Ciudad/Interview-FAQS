import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelcardsComponent } from './components/levelcards/levelcards.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // Importa el módulo de ng-bootstrap


@NgModule({

  declarations: [LevelcardsComponent,
  HeaderComponent,
  FooterComponent],
          
  imports: [
    CommonModule,
    NgbModule
    
  ], 
  exports: [
    LevelcardsComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
