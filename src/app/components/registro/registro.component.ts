import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.models';
import { NgForm } from '@angular/forms';
import { NotiappService } from '../../servicios/notiapp.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;
  recordar = false;

  constructor(private auth: NotiappService,
    private router: Router) { }

  ngOnInit() {
    this.auth.hide();
    this.auth.doSomethingElseUseful();
    this.usuario = new UsuarioModel();
  }

  onSubmit( form: NgForm) {

  if( form.invalid ) {return;}

  Swal.fire({
    allowOutsideClick: false,
    title: 'Cargando...',
  });
  Swal.showLoading();

  this.auth.nuevoUsuario( this.usuario )
  .subscribe( resp => {
    console.log(resp);
    Swal.close();
    if( this.recordar ){
      localStorage.setItem('email', this.usuario.email);
    }
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
