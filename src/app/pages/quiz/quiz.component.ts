import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Question } from 'src/app/shared/interfaces/answerQuestion.interface';

@Component({
  selector: 'shared-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit{

  public questions: Question[] = []

  private router = inject(Router);
  private dataService = inject(DataService);

  ngOnInit(): void {
    this.dataService.getRandomQuestions('Angular', 10).subscribe((questions) => {
      this.questions = questions;

    });
  }

  goBack() {
    this.router.navigate(['/content-page']);
  }

  onSubmit(){}
}
