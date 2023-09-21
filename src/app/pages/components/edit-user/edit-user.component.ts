import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

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

  onSubmit() {
    if (this.user) {
      this.usersService.updateUser(this.user).subscribe((updatedUser) => {
        console.log('Usuario actualizado:', updatedUser);
        this.user = updatedUser; 
        this.router.navigate(['/profile-page/data']);
      });
    } else {
      console.error('No se puede enviar el formulario porque "user" es nulo o indefinido.');
    }
  }

}

