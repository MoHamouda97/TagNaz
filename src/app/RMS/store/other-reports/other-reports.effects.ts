import { concatMap, map } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { OtherReportsActions } from './actions.types';
import { ReportsService } from 'src/services/reports/reports.service';
import { OtherReportsLoaded } from './other-reports.actions';

@Injectable()

export class OtherReportsEffect {

    loadOtherReports$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(OtherReportsActions.loadOtherReports),
                concatMap(action => this.service.otherReport()),
                map(rep => {
                    let OtherReports: any[] = [{id: 1, ...rep}]
                    return OtherReports                                       
                }),
                map(OtherReports => OtherReportsLoaded({OtherReports}))
            ) 
    )

    constructor(private actions$: Actions, private service: ReportsService) {}
}
