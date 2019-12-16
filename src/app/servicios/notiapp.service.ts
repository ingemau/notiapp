import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UsuarioModel } from '../models/usuario.models';

@Injectable({
  providedIn: 'root'
})
export class NotiappService {

  private url = 'https://identitytoolkit.googleapis.com/v1';
  private apikey = 'AIzaSyCq5xEt66-XRYSy5mQX7B1MQr-fnUb654U';

  userToken: string;

  visible: boolean;

  constructor( private http: HttpClient) {
  this.leerToken();
  this.visible = false;
 }

  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }

  doSomethingElseUseful() { }

  logout() {
    localStorage.removeItem('token');
  }

  login( usuario: UsuarioModel) {

    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${ this.url }/accounts:signInWithPassword?key=${this.apikey}`,
      authData
    ).pipe( 
      map( resp => {
      this.guardarToken( resp['idToken'] );
      return resp;
    })
  );
  }

  nuevoUsuario( usuario: UsuarioModel){
  const authData = {
    ...usuario,
    returnSecureToken: true 
  };

  return this.http.post(
    `${ this.url }/accounts:signUp?key=${this.apikey}`,
    authData
  ).pipe(
    map( resp => {
    this.guardarToken( resp['idToken'] );
    return resp;
  })
  );
  }

  private guardarToken( idToken: string) {

    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds( 3600 );

    localStorage.setItem('expira', hoy.getTime().toString() );


  }

  leerToken() {

  if ( localStorage.getItem('token') ) {
  this.userToken = localStorage.getItem('token');
  } else {
    this.userToken = '';
  }

  return this.userToken;

  }

  estaAutenticado(): boolean {

    if ( this.userToken.length < 2 ) {

    return false;
  }

  const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if ( expiraDate > new Date() ) {
      return true;
    } else {
      return false;
    }
}



  getQuery(query: string){
    const url = `https://newsapi.org/v2/top-headlines?${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer https://newsapi.org/v2/top-headlines?apiKey=f7d6c5abf3654e3399733091b16260fc'
    });

    return this.http.get(url, {headers});
  }

  getNuevaInformacion(){

    return this.getQuery('country=mx&apiKey=f7d6c5abf3654e3399733091b16260fc')
    .pipe( map( (data: any) => data.articles));

  }
getPais(frase: string){
    return this.getQuery(`country=${frase}&apiKey=f7d6c5abf3654e3399733091b16260fc`)
    .pipe( map( (data: any) => data.articles));
  }

  getCategoria(termino: string){

    return this.getQuery(`category=${termino}&apiKey=f7d6c5abf3654e3399733091b16260fc`)
  .pipe( map( (data: any) => data.articles));
  }
}
