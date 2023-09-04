import { Component } from '@angular/core';

@Component({
  selector: 'levelcards',
  templateUrl: './levelcards.component.html',
  styleUrls: ['./levelcards.component.css']
})
export class LevelcardsComponent {

  public levelSelected : string = 'Middle';
  public centerWidth: string= '20%';

  selectLevel(level:string){
    this.levelSelected=level;
    this.changeSize();
  }
  changeSize(){
    if (this.centerWidth === '20%') this.centerWidth= '30%';
    else this.centerWidth= '20%';
  }
}
