import { Component, OnInit, inject } from '@angular/core';
import { PagesService } from '../services/pages.service';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent implements OnInit{

  private pagesService = inject(PagesService);
  public selectedCategory: string = "Angular";

  ngOnInit(): void {
    this.pagesService.selectedCategory$.subscribe(content =>
      this.selectedCategory = content)
  }

}
