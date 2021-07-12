
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { first, tap, filter, finalize } from 'rxjs/operators';
import { AppState } from 'src/app/apps/email/app.state';
import { select, Store } from '@ngrx/store';
import { loadMonthReports } from 'src/app/RMS/store/month-reports/month-reports.actions';
import { isMonthReportsLoaded } from 'src/app/RMS/store/month-reports/month-reports.selectors';

@Injectable()

export class MonthReportsResolver implements Resolve<any> {
    loading = false;

    constructor(private stroe: Store<AppState>) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any> {
        return this.stroe
            .pipe(
                select(isMonthReportsLoaded),
                tap(MonthReportsLoaded => {
                    if (!this.loading && !MonthReportsLoaded) {
                        this.loading = true;
                        this.stroe.dispatch(loadMonthReports())
                    }
                }),
                filter(MonthReportsLoaded => MonthReportsLoaded),
                first(),
                finalize(() => this.loading = false)
            )
    }

}