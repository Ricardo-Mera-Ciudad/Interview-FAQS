import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { DataService } from 'src/app/pages/services/data.service';
import { PagesService } from 'src/app/pages/services/pages.service';
import { Question } from '../../interfaces/answerQuestion.interface';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'levelcards',
  templateUrl: './levelcards.component.html',
  styleUrls: ['./levelcards.component.css'],
})
export class LevelcardsComponent implements OnInit, OnDestroy {

  public levelSelected: string = "Middle";
  public questionsLevel: Question[] = [];
  public showLevels = false;
  private pagesService = inject(PagesService);
  private dataService = inject(DataService);


  public centerButtonSelected: boolean = false;
  private unsubscribe$ = new Subject<void>();


  ngOnInit(): void {
    this.getLevelFromStorage();
    this.loadQuestions();
  }
  loadQuestions() {
    this.pagesService.selectedCategory$
      .pipe(
        switchMap((selectedCategory) => {
          return this.dataService.getQuestions(selectedCategory);
        }),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((questions: Question[]) => {
        this.questionsLevel = questions;
      });
  }

  getLevelFromStorage() {
    const selectedLevel = localStorage.getItem('selectedLevel');
    if(selectedLevel){
      this.levelSelected = selectedLevel;
      this.centerButtonSelected = true;
      this.pagesService.setLevel(selectedLevel);
    }
  }


  selectLevel(level: string) {
    this.levelSelected = level;
    this.pagesService.setLevel(level);
    this.centerButtonSelected = true;
    this.loadQuestions();
    localStorage.setItem('selectedLevel', level);
  }


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
