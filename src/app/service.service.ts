import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iempolyee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  private url:any="/assets/employee.json"

  
  getEmployee():Observable<Iempolyee[]>{
    return this.http.get<Iempolyee[]>(this.url)
  }
}
