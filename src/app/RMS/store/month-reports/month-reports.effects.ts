import { concatMap, map } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MonthReportsActions } from './actions.types';
import { ReportsService } from 'src/services/reports/reports.service';
import { MonthReportsLoaded } from './month-reports.actions';

@Injectable()

export class MonthReportsEffect {

    loadMonthReports$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(MonthReportsActions.loadMonthReports),
                concatMap(action => this.service.monthReport()),
                map(rep => {
                    let MonthReports: any[] = [{id: 1, ...rep}]
                    return MonthReports                                       
                }),
                map(MonthReports => MonthReportsLoaded({MonthReports}))
            ) 
    )

    constructor(private actions$: Actions, private service: ReportsService) {}
}
