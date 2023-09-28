import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environments } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class WeblinksService {

  private http = inject(HttpClient);
  private apiUrl = environments.baseUrl;



  getAllWeblinks(){
    return this.http.get(`${this.apiUrl}/weblinks`)
  }
}
