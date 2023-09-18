import { Component, OnInit, inject } from '@angular/core';
import { UsersService } from './auth/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'interview-faqs';

  public isBlurred: boolean = false;
  private userService = inject(UsersService);

  ngOnInit(): void {
    const authDataString = localStorage.getItem('authToken');
    if (authDataString) {
      const authData = JSON.parse(authDataString);
      const userId = authData.userId;
      this.userService.getUserById(userId)
        .subscribe((user: any) => {
          this.userService.setAuthenticatedUserSubject(user)
        })
    }
  }

  toggleBlurEffect(blur: boolean) {
    this.isBlurred = blur;
  }
}
