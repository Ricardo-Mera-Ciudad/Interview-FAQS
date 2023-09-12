import { Component, ElementRef, OnInit, Renderer2, inject } from '@angular/core';

import { PagesService } from 'src/app/pages/services/pages.service';

@Component({
  selector: 'app-header',

  templateUrl: './header.component.html',

  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  public greetingUser: string = 'Hola,';

  public isVisible: boolean = false;

  private pagesService = inject(PagesService);

  private el = inject(ElementRef);

  private renderer = inject(Renderer2);

  ngOnInit(): void {
    this.renderer.listen('document', 'click', (event: Event) => {
      if (!this.el.nativeElement.contains(event.target)) {
        this.closeMenu();
      }
    });
  }

  onShowMenu(): void {
    this.isVisible = !this.isVisible;
  }

  chooseCategory(category: string) {
    this.pagesService.setCategory(category);
    this.onShowMenu();
  }

  closeMenu() {
    this.isVisible = false;
  }
}
