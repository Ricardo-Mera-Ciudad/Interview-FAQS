import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { UserData } from 'src/app/shared/interfaces/user-data.interface';
import { UsersService } from 'src/app/auth/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  
  public user: UserData | null = null;

  private usersService = inject(UsersService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit(): void {
    this.getUserIdByUrl();
  }

  getUserIdByUrl(){
    const userId = this.route.snapshot.params['id'];
    console.log('ID del usuario:', userId);

    this.usersService.getUserById(userId)
      .subscribe((userData: UserData) => {
      this.user = userData;
    });
  }

  onSaveChanges() {
    if (this.user) {
      this.usersService.updateUser(this.user)
        .subscribe((updatedUser) => {
          console.log('Usuario actualizado:', updatedUser);
          this.user = updatedUser; 
          this.usersService.setAuthenticatedUserSubject(this.user)
          this.router.navigate(['/profile-page/data']);
        });
    } else {
      console.error('No se puede enviar el formulario porque "user" es nulo o indefinido.');
    }
  }

  onCancelEdit(){
    this.router.navigate(['/profile-page/data']);
  }
}