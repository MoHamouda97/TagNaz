
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { first, tap, filter, finalize } from 'rxjs/operators';
import { AppState } from 'src/app/apps/email/app.state';
import { select, Store } from '@ngrx/store';
import { loadWeekReports } from 'src/app/RMS/store/week-reports/week-reports.actions';
import { isWeekReportsLoaded } from 'src/app/RMS/store/week-reports/week-reports.selectors';

@Injectable()

export class WeekReportsResolver implements Resolve<any> {
    loading = false;

    constructor(private stroe: Store<AppState>) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any> {
        return this.stroe
            .pipe(
                select(isWeekReportsLoaded),
                tap(WeekReportsLoaded => {
                    if (!this.loading && !WeekReportsLoaded) {
                        this.loading = true;
                        this.stroe.dispatch(loadWeekReports())
                    }
                }),
                filter(WeekReportsLoaded => WeekReportsLoaded),
                first(),
                finalize(() => this.loading = false)
            )
    }

}