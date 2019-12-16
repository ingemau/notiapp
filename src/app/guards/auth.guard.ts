import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NotiappService } from '../servicios/notiapp.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(  private auth: NotiappService,
                private router: Router) {}

  canActivate(): boolean {

  if ( this.auth.estaAutenticado()  ) {
   return true;
  } else {
    this.router.navigateByUrl('/logeo');
    return false;
  }
  }
}
