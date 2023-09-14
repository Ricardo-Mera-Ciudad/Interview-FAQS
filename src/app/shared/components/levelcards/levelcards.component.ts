import { Component, inject } from '@angular/core';
import { PagesService } from 'src/app/pages/services/pages.service';

@Component({
  selector: 'levelcards',
  templateUrl: './levelcards.component.html',
  styleUrls: ['./levelcards.component.css']
})
export class LevelcardsComponent {

  public levelSelected : string = 'Middle';
  private pagesService = inject(PagesService);
  public centerButtonSelected: boolean = false;

  selectLevel(level:string){
    this.levelSelected = level;
    this.pagesService.setLevel(level);
    this.centerButtonSelected = true;
  }

}
