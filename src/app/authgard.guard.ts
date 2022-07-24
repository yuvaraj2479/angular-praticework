import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgardGuard implements CanActivate {
  constructor(private auth:ServiceService, private route:Router){}


  canActivate():boolean {
    if(this.auth.isloggedin()){
      return true
    }else{
      this.route.navigate(['/login'])
      return false
    }
  }
}
