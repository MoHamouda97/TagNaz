
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { first, tap, filter, finalize } from 'rxjs/operators';
import { AppState } from 'src/app/apps/email/app.state';
import { select, Store } from '@ngrx/store';
import { loadSalesReports } from 'src/app/RMS/store/sales-reports/sales-reports.actions';
import { isSalesReportsLoaded } from 'src/app/RMS/store/sales-reports/sales-reports.selectors';

@Injectable()

export class SalesReportsResolver implements Resolve<any> {
    loading = false;

    constructor(private stroe: Store<AppState>) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any> {
        return this.stroe
            .pipe(
                select(isSalesReportsLoaded),
                tap(SalesReportsLoaded => {
                    if (!this.loading && !SalesReportsLoaded) {
                        this.loading = true;
                        this.stroe.dispatch(loadSalesReports())
                    }
                }),
                filter(SalesReportsLoaded => SalesReportsLoaded),
                first(),
                finalize(() => this.loading = false)
            )
    }

}