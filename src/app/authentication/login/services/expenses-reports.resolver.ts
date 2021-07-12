
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { first, tap, filter, finalize } from 'rxjs/operators';
import { AppState } from 'src/app/apps/email/app.state';
import { select, Store } from '@ngrx/store';
import { loadExpensesReports } from 'src/app/RMS/store/expenses-reports/expenses-reports.actions';
import { isExpensesReportsLoaded } from 'src/app/RMS/store/expenses-reports/expenses-reports.selectors';

@Injectable()

export class ExpensesReportsResolver implements Resolve<any> {
    loading = false;

    constructor(private stroe: Store<AppState>) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any> {
        return this.stroe
            .pipe(
                select(isExpensesReportsLoaded),
                tap(ExpensesReportsLoaded => {
                    if (!this.loading && !ExpensesReportsLoaded) {
                        this.loading = true;
                        this.stroe.dispatch(loadExpensesReports())
                    }
                }),
                filter(ExpensesReportsLoaded => ExpensesReportsLoaded),
                first(),
                finalize(() => this.loading = false)
            )
    }

}