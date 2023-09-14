import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PagesService {

  private category$: BehaviorSubject<string> = new BehaviorSubject("Angular")
  public selectedCategory$: Observable<string> = this.category$.asObservable();

  private level$: BehaviorSubject<string> = new BehaviorSubject("Junior")
  public selectedLevel$: Observable<string> = this.level$.asObservable();

  constructor() { }

  setCategory(category: string){
    this.category$.next(category);
  }

  setLevel(level:string){
    this.level$.next(level);
  }


}
