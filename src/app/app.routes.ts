import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FiltrarComponent } from './components/filtrar/filtrar.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LogeoComponent } from './components/logeo/logeo.component';
import { AuthGuard } from './guards/auth.guard';


export const ROUTES: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [ AuthGuard ] },
  {path: 'registro', component: RegistroComponent},
  {path: 'logeo', component: LogeoComponent},
  {path: 'filtrar', component: FiltrarComponent, canActivate: [AuthGuard] },
  {path: '', pathMatch: 'full', redirectTo: 'logeo'},
  {path: '**', pathMatch: 'full', redirectTo: 'logeo'}
];
