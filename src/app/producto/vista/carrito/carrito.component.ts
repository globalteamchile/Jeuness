import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { ConsumoService } from '../../services/consumo.service';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';

// BLOQUE PARA VARIALBES DE USO JQUERY
declare var $: any;

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit, OnDestroy {

  private destroyer = new Subject();
  
  constructor(
    private zone: NgZone,
    public consumoService: ConsumoService
  ) { }

  handler:any = null;
  
  ngOnInit() {
    this.f_loadStripe();
    //this.f_obtieneProductos();
  }

  // BLOQUE DE FUNCIONES STRIPE PARA PAGO

  // Funcion para realizar carga de vista stripe
  f_loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      window.document.body.appendChild(s);
    }
  }
 
  f_pago(amount: any) {    
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_vOz55EGl158pHyVjMMmM29Nt00JJkPKH2s',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        //console.log(token)

        //console.log("token: "+token.id+" - email: "+token.email+" - card: "+token.card.brand+" - pais: "+token.card.country);

        //alert('Token Created!!');
      }
    });
 
    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount * 100,
      image: 'assets/imagen/jeunesse.png'
    });

    $(".Section-button").attr("id", "i_btn_pago");
 
  }

  f_obtieneProductos(){

    this.consumoService.obt_productos().subscribe(
      data => {
        console.log(data);
      }, 
      Error => {
        console.log("Error: Se ha producido un problema durante el proceso: "+Error.status);
      });
  }

  f_generaPagoStripe(){

    console.log('Click al boton');

    this.consumoService.generaPagoStripe().subscribe(
      data => {
        console.log(data);
      }, 
      Error => {
        console.log("Error: Se ha producido un problema durante el proceso: "+Error.status);
      });
  }

  ngOnDestroy() {
		this.destroyer.next();
		this.destroyer.complete();
	}
}