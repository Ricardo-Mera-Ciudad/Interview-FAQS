import { Component, inject, OnInit } from '@angular/core';
import { WeblinksService } from '../services/weblinks.service';

@Component({
  selector: 'app-weblinks',
  templateUrl: './weblinks.component.html',
  styleUrls: ['./weblinks.component.css']
})
export class WeblinksComponent implements OnInit {


  private weblinksService = inject(WeblinksService);
  public links: any;

  ngOnInit(): void {
    this.getAllLinks()
  }

  getAllLinks() {
    return this.weblinksService.getAllWeblinks()
      .subscribe(data => {
        this.links = data;
      })
  }
}
