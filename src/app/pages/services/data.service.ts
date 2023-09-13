import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = environments.baseUrl;

  constructor(private http: HttpClient) { }

  


}
