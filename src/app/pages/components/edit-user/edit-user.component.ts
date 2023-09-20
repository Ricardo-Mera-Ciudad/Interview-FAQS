import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserData } from 'src/app/shared/interfaces/user-data.interface';
import { UsersService } from 'src/app/auth/services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent {
  
  public user?: UserData | null;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getUserIdByUrl();
  }

  getUserIdByUrl(){
    const userId = this.route.snapshot.params['id'];

    this.usersService.getUserById(userId).subscribe(
      (userResponse: UserData) => {
        this.user = userResponse;
      },
      (error) => {
        console.error('Error al obtener la información del usuario:', error);
      }
    );
  }

  onSubmit() {
    if (this.user) {
      this.usersService.updateUser(this.user).subscribe(
        (updatedUser: UserData) => {
          console.log('Usuario actualizado:', updatedUser);
        },
        (error) => {
          console.error('Error al actualizar el usuario:', error);
        }
      );
    }
  }
}
