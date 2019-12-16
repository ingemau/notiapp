import { Component, OnInit } from '@angular/core';
import { NotiappService } from '../../servicios/notiapp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit{

  nuevasNoticias: any [] = [];
  loading: boolean;

  constructor( private noti: NotiappService,
              private router: Router ) {

    this.loading = true;

    this.noti.getNuevaInformacion()
    .subscribe( (resp: any) => {
    this.nuevasNoticias = resp;
    this.loading = false;
    });

   }

   ngOnInit() {
    this.noti.show();
    this.noti.doSomethingElseUseful();
  }

}