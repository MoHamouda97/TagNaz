import { concatMap, map } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ExpensesCatReportsActions } from './actions.types';
import { ReportsService } from 'src/services/reports/reports.service';
import { ExpensesCatReportsLoaded } from './expenses-cat-reports.actions';

@Injectable()

export class ExpensesCatReportsEffect {

    loadExpensesCatReports$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(ExpensesCatReportsActions.loadExpensesCatReports),
                concatMap(action => this.service.ExpensesCatReport()),
                map(rep => {
                    let ExpensesCatReports: any[] = [{id: 1, ...rep}]
                    return ExpensesCatReports                                       
                }),
                map(ExpensesCatReports => ExpensesCatReportsLoaded({ExpensesCatReports}))
            ) 
    )

    constructor(private actions$: Actions, private service: ReportsService) {}
}
