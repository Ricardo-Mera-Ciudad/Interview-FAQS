import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { UsersService } from './auth/services/users.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'interview-faqs';

  public isBlurred: boolean = false;
  private userService = inject(UsersService);
  private unsubscribe$ = new Subject<void>();

  ngOnInit(): void {
    this.checkUserLogin();
  };


  checkUserLogin() {
    const authDataString = localStorage.getItem('authToken');
    if (authDataString) {
      const authData = JSON.parse(authDataString);
      const userId = authData.userId;
      this.userService.getUserById(userId)
        .pipe(
          takeUntil(this.unsubscribe$)
        )
        .subscribe((user: any) => {
          this.userService.setAuthenticatedUserSubject(user);
        });
    };
  };


  toggleBlurEffect(blur: boolean) {
    this.isBlurred = blur;
  };
  

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  };

}
