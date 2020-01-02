import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventoComponent } from './producto/evento/evento.component';
import { OfertaComponent } from './producto/modal/oferta/oferta.component';
import { HomeComponent } from './producto/vista/home/home.component';
import { CarritoComponent } from './producto/vista/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    EventoComponent,
    OfertaComponent,
    HomeComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
