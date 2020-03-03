import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  private baseURL = "http://localhost:8080/restaurant"

  constructor(private http:HttpClient) { }

  findAll() : Observable<any>{
    return this.http.get<any>(`${this.baseURL}s`);
  }
  

}
