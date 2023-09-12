import { Component, OnInit, inject } from '@angular/core';

import { PagesService } from 'src/app/pages/services/pages.service';

@Component({
  selector: 'app-header',

  templateUrl: './header.component.html',

  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  public greetingUser: string = 'Hola,';

  public isVisible: boolean = false;

  private pagesService = inject(PagesService);

  onShowMenu(): void {
    this.isVisible = !this.isVisible;
  }

  chooseCategory(category: string) {
    this.pagesService.setCategory(category);
    this.onShowMenu();
  }
}
