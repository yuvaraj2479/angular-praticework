import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }


  postregister(data:any){
    return  this.http.post<any>("http://localhost:3000/postregister",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getallregister(){
    return  this.http.get<any>("http://localhost:3000/postregister")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteregister(id:number){
    return this.http.delete<any>("http://localhost:3000/postregister/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateregister(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/postregister/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  
  loginuser(){
    return this.http.get("http://localhost:3000/postregister/")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

 
  
}
