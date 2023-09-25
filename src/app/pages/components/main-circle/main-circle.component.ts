import { Component, inject } from '@angular/core';
import { PagesService } from '../../services/pages.service';

@Component({
  selector: 'app-main-circle',
  templateUrl: './main-circle.component.html',
  styleUrls: ['./main-circle.component.css']
})
export class MainCircleComponent {

  private pagesService = inject(PagesService);

  chooseCategory(category: string) {
    this.pagesService.setCategory(category);
  };

}
