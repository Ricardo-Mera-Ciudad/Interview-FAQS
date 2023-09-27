import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Weblinks } from 'src/app/shared/interfaces/weblinks.interface';
import { environments } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class WeblinksService {

  private http = inject(HttpClient);
  private apiUrl = environments.baseUrl;



  getAllWeblinks():Observable<Weblinks[]>{
    return this.http.get<Weblinks[]>(`${this.apiUrl}/weblinks`)
  }
}
