import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Question } from 'src/app/shared/interfaces/answerQuestion.interface';
import { environments } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = environments.baseUrl;

  constructor(private http: HttpClient) {}

  getQuestions(category: string, level?: string): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.apiUrl}/questions`).pipe(
      map((questions: Question[]) => {
        if (level) {
          return questions.filter(
            (question) =>
              question.category === category && question.level === level
          );
        } else {
          return questions.filter((question) => question.category === category);
        }
      })
    );
  }
}
