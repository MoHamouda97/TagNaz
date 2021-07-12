import { concatMap, map } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LoansReportsActions } from './actions.types';
import { ReportsService } from 'src/services/reports/reports.service';
import { LoansReportsLoaded } from './loans-reports.actions';

@Injectable()

export class LoansReportsEffect {

    loadLoansReports$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(LoansReportsActions.loadLoansReports),
                concatMap(action => this.service.LoansReport()),
                map(rep => {
                    let LoansReports: any[] = [{id: 1, ...rep}]
                    return LoansReports                                       
                }),
                map(LoansReports => LoansReportsLoaded({LoansReports}))
            ) 
    )

    constructor(private actions$: Actions, private service: ReportsService) {}
}
