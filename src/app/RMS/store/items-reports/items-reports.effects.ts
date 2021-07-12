import { concatMap, map } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ItemsReportsActions } from './actions.types';
import { ReportsService } from 'src/services/reports/reports.service';
import { ItemsReportsLoaded } from './items-reports.actions';

@Injectable()

export class ItemsReportsEffect {

    loadItemsReports$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(ItemsReportsActions.loadItemsReports),
                concatMap(action => this.service.itemsReport()),
                map(rep => {
                    let ItemsReports: any[] = [{id: 1, ...rep}]
                    return ItemsReports                                       
                }),
                map(ItemsReports => ItemsReportsLoaded({ItemsReports}))
            ) 
    )

    constructor(private actions$: Actions, private service: ReportsService) {}
}
