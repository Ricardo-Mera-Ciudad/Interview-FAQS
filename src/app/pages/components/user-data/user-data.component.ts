import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from 'src/app/auth/services/users.service';
import { UserData } from 'src/app/shared/interfaces/user-data.interface';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],
})
export class UserDataComponent implements OnInit, OnDestroy {
  public userData: UserData | null = null;

  private unsubscribe$ = new Subject<void>();

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.userLogged();
  }

  userLogged(){
    this.usersService.getAuthenticatedUserSubject()
    .pipe(
      takeUntil(this.unsubscribe$)
    )
    .subscribe((user) => {
      console.log(user);
      this.userData = user;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  };
}