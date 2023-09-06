import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PagesService {

  private category$: BehaviorSubject<string> = new BehaviorSubject("Angular")
  public selectedCategory$: Observable<string> = this.category$.asObservable();

  constructor() { }

  setCategory(category: string){
  this.category$.next(category)
  }


}
