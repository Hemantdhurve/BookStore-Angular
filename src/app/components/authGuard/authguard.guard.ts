import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationserviceService } from '../Services/authenticationservice/authenticationservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

constructor(private authservice:AuthenticationserviceService,private router:Router){}

  canActivate(): boolean {
    if(!this.authservice.gettoken())
    {
      this.router.navigate(['/login']);
    }
    return this.authservice.gettoken();
  }
  
}
