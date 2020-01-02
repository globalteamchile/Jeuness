import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CarritoComponent} from './producto/vista/carrito/carrito.component';
import {EventoComponent} from './producto/evento/evento.component';
import { HomeComponent } from './producto/vista/home/home.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [],
    children: [
      {
        path: '',
        component: CarritoComponent
      },
      {
        path: 'evento',
        component: EventoComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'carrito',
        component: CarritoComponent
      }
    ]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
