import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserData } from 'src/app/shared/interfaces/user-data.interface';
import { UsersService } from 'src/app/auth/services/users.service';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  @Input() user?: UserData | null;

  constructor(private usersService: UsersService) { }

  onSubmit() {
    this.usersService.updateUser(this.user)
    .subscribe((user) => {
      console.log(user);
      this.user = user;
    });
  }
}
