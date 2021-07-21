import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { TransactionssService } from "src/services/transactions/transactions.service";

@Injectable()

export class AllTransResolver implements Resolve<any> {
    
    constructor(private services: TransactionssService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any>{
        return this.services.getTrancsactions(1);
    }
}