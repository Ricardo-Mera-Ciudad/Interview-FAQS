import { ChangeDetectorRef, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { UsersService } from 'src/app/auth/services/users.service';
import { UserData } from 'src/app/shared/interfaces/user-data.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],
})
export class UserDataComponent implements OnInit, OnDestroy {

  private usersService = inject(UsersService);

  public userData: UserData | null = null;

  private unsubscribe$ = new Subject<void>();

  private router = inject(Router);
  
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
  }  

  onConfirmDelete() {
    if (this.userData) {
      const confirmacion = confirm(`¿Estás seguro de que deseas eliminar tu cuenta ${this.userData.name}? Esta acción no se puede deshacer.`);

      if (confirmacion) {
        this.onDeleteUser();
      }
      else {
        this.router.navigate(['/profile-page/data']);
      }
    }
  }

  onDeleteUser() {
    if (this.userData) {
      this.usersService.deleteUserById(this.userData.id).subscribe((deletedUser) => {
        if (deletedUser) {
          this.usersService.logout();
          this.router.navigate(['/login']);
        }
      });
    }
  }


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  };
}