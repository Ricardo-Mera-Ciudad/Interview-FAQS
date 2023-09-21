import { ChangeDetectorRef, Component, OnDestroy, OnInit, inject } from '@angular/core';
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

  private usersService = inject(UsersService);
  
  ngOnInit(): void {
    this.getUserLogged();
    this.getUpdatedUser();
    this.loadUserData();
  }

  getUserLogged(){
    this.usersService.getAuthenticatedUserSubject()
    .pipe(
      takeUntil(this.unsubscribe$)
    )
    .subscribe((user) => {
      console.log(user);
      this.userData = user;
    });
  }

  getUpdatedUser(): void {
    this.usersService.getUpdatedUser()
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe((updatedUser) => {
        console.log('Usuario actualizado:', updatedUser); 

        if (updatedUser) {
          this.userData = updatedUser;
        }
      });
  }

  loadUserData() {
    this.usersService.getAuthenticatedUserSubject().subscribe((user) => {
      if (user) {
        this.userData = user;
      }
    });
  }  


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  };
}