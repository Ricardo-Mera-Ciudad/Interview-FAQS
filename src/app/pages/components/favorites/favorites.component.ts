import { Component, inject } from '@angular/core';
import { PagesService } from '../../services/pages.service';
import { DataService } from '../../services/data.service';
import { UsersService } from 'src/app/auth/services/users.service';
import { of, switchMap } from 'rxjs';
import { Question } from 'src/app/shared/interfaces/answerQuestion.interface';
// import { UserFavs } from 'src/app/shared/interfaces/user-data.interface';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  // public questions: Question[] = [];
  // public category: string = 'Angular';
  // public level: string | null = null;
  // public isLoading: boolean = true;

  // public answerVisibility: { [key: number]: boolean } = {};
  // public borderRadiusState: { [key: number]: boolean } = {};
  // public favouriteStatusColor: { [key: number]: boolean } = {};

  // private pagesService = inject(PagesService);
  // private dataService  = inject(DataService);
  // private usersService = inject(UsersService);


  // ngOnInit(): void {
  //   this.getFavoritesFaqs();
  // }

  // getFavoritesFaqs() {
  //   this.usersService.getAuthenticatedUserSubject().pipe(
  //     switchMap((user) => {
  //       if (user && user.id) {
  //         return this.dataService.getFavoriteQuestions(user.id);
  //       } else {
  //         return of([]);
  //       }
  //     })
  //   ).subscribe((favoriteQuestions: Question[]) => {
  //     this.questions = favoriteQuestions;
  //     this.isLoading = false;
  //   });
  // }


  // removeFromFavorites(question: Question) {
  //   const favoriteQuestions = this.dataService.getSavedFavoriteQuestionsFromStorage();
  //   const index = favoriteQuestions.findIndex((favQuestion) => favQuestion.id === question.id);

  //   if (index !== -1) {
  //     favoriteQuestions.splice(index, 1);
  //     this.dataService.saveFavoriteQuestions(favoriteQuestions);

  //     this.usersService.getAuthenticatedUserSubject().subscribe((user) => {
  //       if (user && user.id) {
  //         const userId = user.id;
  //         const userFav: UserFavs = {
  //           userId: userId,
  //           questionId: question.id,
  //         };

  //         this.dataService.removeFavoriteQuestion(userFav).subscribe(() => {
  //           const currentQuestion = this.questions.find((q) => q.id === question.id);
  //           if (currentQuestion) {
  //             currentQuestion.favorite = false;
  //             console.log('currentQuestion.favorite:', currentQuestion.favorite);
  //           }
  //           this.favouriteStatusColor[question.id] = false;
  //         });
  //       } else {
  //         this.favouriteStatusColor[question.id] = false;
  //       }
  //     });
  //   }
  // }


  // showAnswer(id: number) {
  //   this.answerVisibility[id] = !this.answerVisibility[id];
  //   this.borderRadiusState[id] = this.answerVisibility[id];
  // }

}
