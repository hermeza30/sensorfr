import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(public _loginService:LoginService,public router:Router){}
  canActivate():  boolean {
    if(this._loginService.estaLogueado()){
        return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
