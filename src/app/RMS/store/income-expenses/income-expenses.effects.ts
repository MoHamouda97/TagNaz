import { concatMap, map } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { IncomeExpensesReportActions } from './actions.types';
import { ReportsService } from 'src/services/reports/reports.service';
import { IncomeExpensesReportLoaded } from './income-expenses.actions';

@Injectable()

export class IncomeExpensesReportEffect {

    loadIncomeExpensesReport$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(IncomeExpensesReportActions.loadIncomeExpensesReport),
                concatMap(action => this.service.incomeExpensesReport()),
                map(rep => {
                    let IncomeExpensesReport: any[] = [{id: 1, ...rep}]
                    return IncomeExpensesReport                                       
                }),
                map(IncomeExpensesReport => IncomeExpensesReportLoaded({IncomeExpensesReport}))
            ) 
    )

    constructor(private actions$: Actions, private service: ReportsService) {}
}
