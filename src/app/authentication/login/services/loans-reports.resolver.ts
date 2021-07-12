
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { first, tap, filter, finalize } from 'rxjs/operators';
import { AppState } from 'src/app/apps/email/app.state';
import { select, Store } from '@ngrx/store';
import { loadLoansReports } from 'src/app/RMS/store/loans-reports/loans-reports.actions';
import { isLoansReportsLoaded } from 'src/app/RMS/store/loans-reports/loans-reports.selectors';

@Injectable()

export class LoansReportsResolver implements Resolve<any> {
    loading = false;

    constructor(private stroe: Store<AppState>) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any> {
        return this.stroe
            .pipe(
                select(isLoansReportsLoaded),
                tap(LoansReportsLoaded => {
                    if (!this.loading && !LoansReportsLoaded) {
                        this.loading = true;
                        this.stroe.dispatch(loadLoansReports())
                    }
                }),
                filter(LoansReportsLoaded => LoansReportsLoaded),
                first(),
                finalize(() => this.loading = false)
            )
    }

}