import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { data } from '../model/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  URL: string = "http://localhost:3000/data";


  constructor(private http:HttpClient) { }

  getDatas():Observable<data[]>{
    return this.http.get<data[]>(this.URL);
  }

}
