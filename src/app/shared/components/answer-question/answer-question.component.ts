import { Component, inject } from '@angular/core';
import { Question } from '../../interfaces/answerQuestion.interface';
import { PagesService } from 'src/app/pages/services/pages.service';
import { Subject, combineLatest, switchMap, takeUntil } from 'rxjs';
import { DataService } from 'src/app/pages/services/data.service';
import { UserFavs } from '../../interfaces/user-data.interface';
import { UsersService } from 'src/app/auth/services/users.service';

@Component({
  selector: 'shared-answer-question',
  templateUrl: './answer-question.component.html',
  styleUrls: ['./answer-question.component.css'],
})
export class AnswerQuestionComponent {
  public questions: Question[] = [];

  public answerVisibility: { [key: number]: boolean } = {};
  public borderRadiusState: { [key: number]: boolean } = {};
  public favouriteStatusColor: { [key: number]: boolean } = {};

  private pagesService = inject(PagesService);
  public category: string = 'Angular';
  public level: string | null = null;
  public isLoading: boolean = true;


  private unsubscribe$ = new Subject<void>();
  private dataService = inject(DataService);
  private usersService = inject(UsersService);

  constructor() { }
  ngOnInit(): void {
    this.loadCategory();
  }

  getFaqs() {
    this.pagesService.selectedCategory$
      .pipe(
        switchMap((selectedCategory) => {
          return this.dataService.getQuestions(selectedCategory, this.level!);
          return this.dataService.getQuestions(selectedCategory, this.level!);
        })
      )
      .subscribe((questions: Question[]) => {
        this.questions = questions.map((question) => ({
          ...question,
          favorite: false,
        }));

        this.questions = questions;
        this.isLoading = false;
        this.questions.forEach((question) => {
          this.answerVisibility[question.id] = false;
          this.borderRadiusState[question.id] = false;
          this.favouriteStatusColor[question.id] = false;
        });
        console.log(this.questions);
      });
  }

  favouriteStatus(question: Question) {
    const isFavorite = this.favouriteStatusColor[question.id];
    this.favouriteStatusColor[question.id] = !isFavorite;

    this.usersService.getAuthenticatedUserSubject().subscribe((user) => {
      if (user && user.id) {
        const userId = user.id;

        const userFav: UserFavs = {
          userId: userId,
          questionId: question.id,
        };

        if (isFavorite) {
          this.dataService
            .removeFavoriteQuestion(userFav)
            .subscribe((response) => {
              console.log('Pregunta eliminada de favoritas:', response);
              question.favorite = false;
            });
        } else {
          this.dataService
            .addFavoriteQuestion(userFav)
            .subscribe((response) => {
              console.log('Pregunta agregada a favoritas:', response);
              question.favorite = true;
            });
        }
      } else {
        alert('Por favor, inicia sesión para agregar preguntas a favoritas.');
      }
    });
  }

  loadCategory() {
    combineLatest([
      this.pagesService.selectedCategory$,
      this.pagesService.selectedLevel$,
    ])
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(([categoryFromService, levelFromService]) => {
        this.category = categoryFromService;
        this.level = levelFromService;
        this.getFaqs();
      });
  }

  showAnswer(id: number) {
    this.answerVisibility[id] = !this.answerVisibility[id];
    this.borderRadiusState[id] = this.answerVisibility[id];
  }

  getCategoryImage(category: string): string {
    let imgUrl: string = '';

    switch (category) {
      case 'Angular':
        imgUrl = '../../../../assets/images/angular.png';
        break;
      case 'Html':
        imgUrl = '../../../../assets/images/html.png';
        break;
      case 'Css':
        imgUrl = '../../../../assets/images/css.png';
        break;
      case 'Javascript':
        imgUrl = '../../../../assets/images/javascript.png';
        break;
      case 'Typescript':
        imgUrl = '../../../../assets/images/typescript.png';
        break;
      case 'Softskills':
        imgUrl = "../../../../assets/images/softskills-icon.png";
        break;
      case 'Git':
        imgUrl = "../../../../assets/images/git-icon.png";
        break;
      case 'Weblinks':
        imgUrl = "../../../../assets/images/weblinks-icon.png";
        break;
    }
    return imgUrl;
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
