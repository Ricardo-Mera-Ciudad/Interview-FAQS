import { Component, ElementRef, OnInit, Renderer2, inject } from '@angular/core';

import { PagesService } from 'src/app/pages/services/pages.service';
import { UsersService } from '../../../auth/services/users.service';
import { Router } from '@angular/router';

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

  private el = inject(ElementRef);

  private renderer = inject(Renderer2);

  private usersService = inject(UsersService);

  private router = inject(Router);
  

  ngOnInit(): void {
    this.renderer.listen('document', 'click', (event: Event) => {
      if (!this.el.nativeElement.contains(event.target)) {
        this.closeMenu();
        this.closeUserMenu();
      }
    });
  }

  onShowMenu() {    
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

  closeUserMenu() {
    this.isUserLoggedIn = false;
  }

  logout() {
    this.usersService.logout();
    localStorage.clear();
    this.router.navigate(['/login']);
    this.isUserAuthenticated = false;
  }

}
