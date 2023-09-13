import { Component, ElementRef, OnInit, Renderer2, inject } from '@angular/core';

import { PagesService } from 'src/app/pages/services/pages.service';
import { UsersService } from '../../../auth/services/users.service';

@Component({
  selector: 'app-header',

  templateUrl: './header.component.html',

  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  public userName!: string;

  public isVisible: boolean = false;

  public isUserLoggedIn: boolean = false;

  public isUserAuthenticated: boolean = false;

  private pagesService = inject(PagesService);

  private userService = inject(UsersService);

  private el = inject(ElementRef);

  private renderer = inject(Renderer2);

  ngOnInit(): void {
    this.renderer.listen('document', 'click', (event: Event) => {
      if (!this.el.nativeElement.contains(event.target)) {
        this.closeMenu();
      }
    });
  }

  onShowMenu(event?: Event) {
    if (event) {
      const clickedElement = event.target as HTMLElement;
      if (clickedElement.id === 'signup-link') {
        return;
      }
    }
    this.isVisible = !this.isVisible;
  }

  onClickUser(){
    this.isUserLoggedIn = !this.isUserLoggedIn;

  }

  chooseCategory(category: string) {
    this.pagesService.setCategory(category);
  }

  closeMenu() {
    this.isVisible = false;
  }

  logout() {
    //this.usersService.logout();

    localStorage.clear();
    this.isUserAuthenticated = false;
  }


}
