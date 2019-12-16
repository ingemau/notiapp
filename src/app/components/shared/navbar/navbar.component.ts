import { Component } from '@angular/core';
import { NotiappService } from '../../../servicios/notiapp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent{

  constructor(  private noti: NotiappService,
    private router: Router) { }

  salir() {

    this.noti.logout();
    this.router.navigateByUrl('/login');

  }

}
