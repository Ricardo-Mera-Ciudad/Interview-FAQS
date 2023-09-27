import { Component, inject, OnInit } from '@angular/core';
import { WeblinksService } from '../services/weblinks.service';
import { Weblinks } from 'src/app/shared/interfaces/weblinks.interface';

@Component({
  selector: 'app-weblinks',
  templateUrl: './weblinks.component.html',
  styleUrls: ['./weblinks.component.css']
})
export class WeblinksComponent implements OnInit {


  private weblinksService = inject(WeblinksService);
  public links!:Weblinks[];
  public officialDoc!:Weblinks[]
  public challenges!:Weblinks[]
  public courses!:Weblinks[]
  public resources!:Weblinks[]

  ngOnInit(): void {
    this.getAllLinks()
  }

  getAllLinks() {
    return this.weblinksService.getAllWeblinks()
      .subscribe(data => {
        // Crear un objeto que contendrá las categorías como propiedades y sus elementos como arrays
      const categorizedLinks:any = {};

      // Iterar a través de los datos y organizarlos por categoría
      data.forEach(link => {
        const category = link.category;

        // Si aún no existe un array para la categoría actual, créalo
        if (!categorizedLinks[category]) {
          categorizedLinks[category] = [];
        }

        // Agrega el objeto actual al array correspondiente a su categoría
        categorizedLinks[category].push(link);
        
        this.officialDoc = categorizedLinks.officialDoc;
        this.challenges = categorizedLinks.challenges;
        this.courses = categorizedLinks.courses;
        this.resources = categorizedLinks.resources;
      });
     
      })
  }
}
