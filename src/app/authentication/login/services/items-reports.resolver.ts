
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { first, tap, filter, finalize } from 'rxjs/operators';
import { AppState } from 'src/app/apps/email/app.state';
import { select, Store } from '@ngrx/store';
import { loadItemsReports } from 'src/app/RMS/store/items-reports/items-reports.actions';
import { isItemsReportsLoaded } from 'src/app/RMS/store/items-reports/items-reports.selectors';

@Injectable()

export class ItemsReportsResolver implements Resolve<any> {
    loading = false;

    constructor(private stroe: Store<AppState>) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any> {
        return this.stroe
            .pipe(
                select(isItemsReportsLoaded),
                tap(ItemsReportsLoaded => {
                    if (!this.loading && !ItemsReportsLoaded) {
                        this.loading = true;
                        this.stroe.dispatch(loadItemsReports())
                    }
                }),
                filter(ItemsReportsLoaded => ItemsReportsLoaded),
                first(),
                finalize(() => this.loading = false)
            )
    }

}