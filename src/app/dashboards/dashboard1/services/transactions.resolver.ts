import { TransactionssService } from './../../../../services/transactions/transactions.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()

export class TransactionsResolver implements Resolve<any> {
    
    constructor(private services: TransactionssService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any>{
        return this.services.getExpensessDetails();
    }
}