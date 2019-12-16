import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';


// Importar rutas
import { ROUTES } from './app.routes';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NotiappService } from './servicios/notiapp.service';
import { FiltrarComponent } from './components/filtrar/filtrar.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LogeoComponent } from './components/logeo/logeo.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FiltrarComponent,
    TarjetasComponent,
    RegistroComponent,
    LogeoComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot( ROUTES, {useHash: true} )
  ],
  providers: [
    NotiappService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
