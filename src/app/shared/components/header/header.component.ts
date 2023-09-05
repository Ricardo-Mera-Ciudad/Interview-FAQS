import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public greetingUser: string = "Hola";

  public isVisible: boolean = false;

  onShowMenu(){

    this.isVisible = !this.isVisible;

  }
}
