import { concatMap, map } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SalesReportsActions } from './actions.types';
import { ReportsService } from 'src/services/reports/reports.service';
import { SalesReportsLoaded } from './sales-reports.actions';

@Injectable()

export class SalesReportsEffect {

    loadSalesReports$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(SalesReportsActions.loadSalesReports),
                concatMap(action => this.service.orderReport()),
                map(rep => {
                    let SalesReports: any[] = [{id: 1, ...rep}]
                    return SalesReports                                       
                }),
                map(SalesReports => SalesReportsLoaded({SalesReports}))
            ) 
    )

    constructor(private actions$: Actions, private service: ReportsService) {}
}
