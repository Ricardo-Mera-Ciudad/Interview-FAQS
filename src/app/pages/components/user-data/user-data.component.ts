import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/auth/services/users.service';
import { UserData } from 'src/app/shared/interfaces/user-data.interface';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],
})
export class UserDataComponent implements OnInit {
  public userData: UserData | null = null;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.userLogged();
  }

  userLogged(){
    this.usersService.getAuthenticatedUserSubject()
    .subscribe((user) => {
      console.log(user);
      this.userData = user;
    });
  }
}