
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { first, tap, filter, finalize } from 'rxjs/operators';
import { AppState } from 'src/app/apps/email/app.state';
import { select, Store } from '@ngrx/store';
import { loadExpensesCatReports } from 'src/app/RMS/store/expenses-cat-reports/expenses-cat-reports.actions';
import { isExpensesCatReportsLoaded } from 'src/app/RMS/store/expenses-cat-reports/expenses-cat-reports.selectors';

@Injectable()

export class ExpensesCatReportsResolver implements Resolve<any> {
    loading = false;

    constructor(private stroe: Store<AppState>) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any> {
        return this.stroe
            .pipe(
                select(isExpensesCatReportsLoaded),
                tap(ExpensesCatReportsLoaded => {
                    if (!this.loading && !ExpensesCatReportsLoaded) {
                        this.loading = true;
                        this.stroe.dispatch(loadExpensesCatReports())
                    }
                }),
                filter(ExpensesCatReportsLoaded => ExpensesCatReportsLoaded),
                first(),
                finalize(() => this.loading = false)
            )
    }

}