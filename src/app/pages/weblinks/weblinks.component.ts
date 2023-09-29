import { Component, inject, OnInit, TemplateRef } from '@angular/core';
import { WeblinksService } from '../services/weblinks.service';
import { Weblinks } from 'src/app/shared/interfaces/weblinks.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-weblinks',
  templateUrl: './weblinks.component.html',
  styleUrls: ['./weblinks.component.css']
})
export class WeblinksComponent implements OnInit {

  private weblinksService = inject(WeblinksService);
  private modalService = inject(NgbModal);
  public links!: Weblinks[];
  public officialDoc!: Weblinks[]
  public challenges!: Weblinks[]
  public courses!: Weblinks[]
  public resources!: Weblinks[]


  ngOnInit(): void {
    this.getAllLinks()
  }


  getAllLinks() {
    return this.weblinksService.getAllWeblinks()
      .subscribe(data => {
    
        const categorizedLinks: any = {};

        data.forEach(link => {
          const category = link.category;

          if (!categorizedLinks[category]) {
            categorizedLinks[category] = [];
          }

          categorizedLinks[category].push(link);

          this.officialDoc = categorizedLinks.officialDoc;
          this.challenges = categorizedLinks.challenges;
          this.courses = categorizedLinks.courses;
          this.resources = categorizedLinks.resources;
        });
      })
  }


  openVerticallyCentered(content: TemplateRef<Weblinks[]>):void {
		this.modalService.open(content, { centered: true });
	}


}
