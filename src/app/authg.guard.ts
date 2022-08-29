import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './services/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgGuard implements CanActivate {
  constructor(private auth:AuthserviceService,private router:Router){}
  canActivate():boolean {
    if(this.auth.checkToken()){
    return true;
    }
    else{
      this.router.navigateByUrl('login');
      return false;
    }
  }
  
}
