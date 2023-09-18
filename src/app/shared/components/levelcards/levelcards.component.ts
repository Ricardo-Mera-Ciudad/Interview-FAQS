import { Component, OnInit, inject } from '@angular/core';
import { switchMap } from 'rxjs';
import { DataService } from 'src/app/pages/services/data.service';
import { PagesService } from 'src/app/pages/services/pages.service';
import { Question } from '../../interfaces/answerQuestion.interface';

@Component({
  selector: 'levelcards',
  templateUrl: './levelcards.component.html',
  styleUrls: ['./levelcards.component.css'],
})
export class LevelcardsComponent implements OnInit {
  public levelSelected: string = 'Middle';
  public questionsLevel: Question[] = [];
  private pagesService = inject(PagesService);
  private dataService = inject(DataService);
  public centerButtonSelected: boolean = false;

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions() {
    this.pagesService.selectedCategory$.pipe(
      switchMap((selectedCategory) => {
        return this.dataService.getQuestions(selectedCategory, this.levelSelected);
      })
    ).subscribe((questions: Question[]) => {
      this.questionsLevel = questions;

    });
  }


  selectLevel(level: string) {
    this.levelSelected = level;
    this.pagesService.setLevel(level);
    this.centerButtonSelected = true;
    this.loadQuestions();
  }
}
