import { concatMap, map } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { WeekReportsActions } from './actions.types';
import { ReportsService } from 'src/services/reports/reports.service';
import { WeekReportsLoaded } from './week-reports.actions';

@Injectable()

export class WeekReportsEffect {

    loadWeekReports$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(WeekReportsActions.loadWeekReports),
                concatMap(action => this.service.weekReport()),
                map(rep => {
                    let WeekReports: any[] = [{id: 1, ...rep}]
                    return WeekReports                                       
                }),
                map(WeekReports => WeekReportsLoaded({WeekReports}))
            ) 
    )

    constructor(private actions$: Actions, private service: ReportsService) {}
}
