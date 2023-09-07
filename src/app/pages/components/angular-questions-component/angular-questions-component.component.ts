import { Component, OnInit, inject } from '@angular/core';
import { PagesService } from '../../services/pages.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-angular-questions-component',
  templateUrl: './angular-questions-component.component.html',
  styleUrls: ['./angular-questions-component.component.css']
})
export class AngularQuestionsComponentComponent implements OnInit {
  
  private pagesService = inject(PagesService)
  public category : string = 'Angular';
  public level    : string = 'Middle';
  
  private unsubscribe$ = new Subject<void>();

  ngOnInit(): void {
    this.pagesService.selectedCategory$
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(categoryFromService => this.category = categoryFromService);
    this.pagesService.selectedLevel$
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(levelFromService => this.level = levelFromService);
  }
  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  

  
}
