import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { AuthserviceService } from './authservice.service';




@Injectable()
export class AuthguardService implements CanActivate{

  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable <boolean> | Promise <boolean> | boolean {

    if(this.AuthserviceService.isAuth){
      return true;

    } else {

      this.router.navigate(['/acceuil']);
    }

  }

  constructor(private AuthserviceService: AuthserviceService, private router:Router) { }
}
