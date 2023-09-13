import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'interview-faqs';

  isBlurred: boolean = false;

  toggleBlurEffect(blur: boolean) {
    this.isBlurred = blur;
  }

}
