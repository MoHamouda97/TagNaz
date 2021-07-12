import { concatMap, map } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ExpensesReportsActions } from './actions.types';
import { ReportsService } from 'src/services/reports/reports.service';
import { ExpensesReportsLoaded } from './expenses-reports.actions';

@Injectable()

export class ExpensesReportsEffect {

    loadExpensesReports$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(ExpensesReportsActions.loadExpensesReports),
                concatMap(action => this.service.ExpensesReport()),
                map(rep => {
                    let ExpensesReports: any[] = [{id: 1, ...rep}]
                    return ExpensesReports                                       
                }),
                map(ExpensesReports => ExpensesReportsLoaded({ExpensesReports}))
            ) 
    )

    constructor(private actions$: Actions, private service: ReportsService) {}
}
