import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ResponseProductoModel } from '../models/response-producto.model';
import { RequestStripePagoModel } from '../models/request-stripePago.model';
import { ResponseStripePagoModel } from '../models/response-stripePago.model';

@Injectable()
export class ConsumoService {

    constructor(
        private http:HttpClient) { }

    obt_productos(): Observable<ResponseProductoModel>{
        const url = 'http://localhost/productos';
        return this.http.post<ResponseProductoModel>(url, '');
    }

    generaPagoStripe(): Observable<ResponseStripePagoModel>{

        let jsonEntrada = new RequestStripePagoModel();
        jsonEntrada.token = '123456789';
        jsonEntrada.email = 'test@tets.cl';
        jsonEntrada.card = 'usd';
        jsonEntrada.pais = 'chile';
        jsonEntrada.monto = '10';
        jsonEntrada.producto = 'crema_suero';

        const url = 'http://localhost/checkout';
        return this.http.post<ResponseStripePagoModel>(url, jsonEntrada);
    }
}
