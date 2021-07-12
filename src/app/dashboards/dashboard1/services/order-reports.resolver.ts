import { OrdersService } from 'src/services/orders/orders.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()

export class OrderReportsResolver implements Resolve<any> {
    
    constructor(private services: OrdersService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any>{
        return this.services.getOrderReport();
    }
}