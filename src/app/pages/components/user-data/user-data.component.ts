import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/auth/services/users.service';
import { UserData } from 'src/app/shared/interfaces/user-data.interface';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],
})
export class UserDataComponent implements OnInit, OnDestroy {

  private usersService = inject(UsersService);
  private router = inject(Router);

  public userData: UserData | null = null;

  private unsubscribe$ = new Subject<void>();


  ngOnInit(): void {
    this.getUserLogged();
    this.getUpdatedUser();
    this.loadUserData();
  };


  getUserLogged() {
    this.usersService.getAuthenticatedUserSubject()
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe((user) => {
        console.log(user);
        this.userData = user;
      });
  };
  

  getUpdatedUser(): void {
    this.usersService.getUpdatedUserSubject()
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe((updatedUser) => {
        console.log('Usuario actualizado:', updatedUser);

        if (updatedUser) {
          this.userData = updatedUser;
        }
      });
  };


  loadUserData() {
    this.usersService.getAuthenticatedUserSubject()
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe((user) => {
        if (user) {
          this.userData = user;
        }
      });
  };


  onConfirmDelete() {
    if (this.userData) {
      const confirmation = confirm(`¿Estás seguro de que deseas eliminar tu cuenta ${this.userData.name}? Esta acción no se puede deshacer.`);

      if (confirmation) {
        localStorage.removeItem('authToken');
        this.onDeleteUser(this.userData);
      }
      else {
        this.router.navigate(['/profile-page/data']);
      }
    }
  };


  onDeleteUser(userData: UserData) {
    this.usersService.deleteUserById(userData.id)
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe((_) => {
        this.router.navigate(['/login']);
      });
  };


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  };
}