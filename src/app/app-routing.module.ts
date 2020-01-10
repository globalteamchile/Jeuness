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
        path: 'carrito',
        component: HomeComponent
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
        path: '',
        component: CarritoComponent
      },
      {
        path: '**',
        component: HomeComponent
      }
    ]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
