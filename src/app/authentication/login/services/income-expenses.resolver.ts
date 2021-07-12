
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { first, tap, filter, finalize } from 'rxjs/operators';
import { AppState } from 'src/app/apps/email/app.state';
import { select, Store } from '@ngrx/store';
import { loadIncomeExpensesReport } from 'src/app/RMS/store/income-expenses/income-expenses.actions';
import { isIncomeExpensesReportLoaded } from 'src/app/RMS/store/income-expenses/income-expenses.selectors';

@Injectable()

export class IncomeExpensesReportResolver implements Resolve<any> {
    loading = false;

    constructor(private stroe: Store<AppState>) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any> {
        return this.stroe
            .pipe(
                select(isIncomeExpensesReportLoaded),
                tap(IncomeExpensesReportLoaded => {
                    if (!this.loading && !IncomeExpensesReportLoaded) {
                        this.loading = true;
                        this.stroe.dispatch(loadIncomeExpensesReport())
                    }
                }),
                filter(IncomeExpensesReportLoaded => IncomeExpensesReportLoaded),
                first(),
                finalize(() => this.loading = false)
            )
    }

}