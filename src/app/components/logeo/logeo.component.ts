import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.models';
import { NotiappService } from '../../servicios/notiapp.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logeo',
  templateUrl: './logeo.component.html',
  styleUrls: ['./logeo.component.css']
})
export class LogeoComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  
  constructor( private auth: NotiappService,
    private router: Router) { }

  ngOnInit() {
    this.auth.hide();
    this.auth.doSomethingElseUseful();
  }


  login(form: NgForm){

    if(form.invalid) {return;}

    Swal.fire({
      allowOutsideClick: false,
      title: 'Cargando...',
    });
    Swal.showLoading();

    this.auth.login( this.usuario ).subscribe( resp => {
    console.log(resp);
    Swal.close();
    this.router.navigateByUrl('/home');
    }, (err) => {
      console.log(err.error.error.message);
      Swal.fire({
        icon: 'error',
        title: 'Error al autenticar',
        text: err.error.error.message
      });
    });
  }

}
