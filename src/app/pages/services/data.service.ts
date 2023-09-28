import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map, of, switchMap } from 'rxjs';
import { UsersService } from 'src/app/auth/services/users.service';
import { Question } from 'src/app/shared/interfaces/answerQuestion.interface';
import { environments } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private apiUrl = environments.baseUrl;

  constructor(private http: HttpClient, private usersService: UsersService) {}

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

  getRandomQuestions(category: string, count: number): Observable<Question[]>{
    return this.getQuestions(category).pipe(
      map((questions) => {
        if(questions.length <= count){
          return questions;
        } else {
          const shuffledQuestions = questions.slice().sort(() => 0.5 - Math.random());
          return shuffledQuestions.slice(0, count);
        }
      })
    )
  }

  markQuestionAsFavorite(questionId: number) {
    this.usersService.getAuthenticatedUserSubject().subscribe((user) => {
      if (!user) {
        return null;
      }
      user.favoriteQuestions.push(questionId);

      return this.http.put(`${this.apiUrl}/users/${user.id}`, user)
        .subscribe(() => {});
    });
  }

  unmarkQuestionAsFavorite(questionId: number) {
    this.usersService.getAuthenticatedUserSubject().subscribe((user) => {
      if (!user) {
        return null;
      }
      user.favoriteQuestions = user.favoriteQuestions.filter((id) => id !== questionId);

      return this.http.put(`${this.apiUrl}/users/${user.id}`, user).subscribe(() => {
      });
    });
  }



  getFavoriteQuestions(): Observable<Question[]> {
    return this.usersService.getAuthenticatedUserSubject().pipe(
      switchMap((user) => {
        if (!user) {
          return of([]);
        }

        return this.http.get<Question[]>(`${this.apiUrl}/questions`).pipe(
          map((questions) =>
            questions.filter((question) => user.favoriteQuestions.includes(question.id))
          )
        );
      })
    );
  }


}
