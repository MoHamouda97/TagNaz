import { createAction, props } from '@ngrx/store';

export const loadItemsReports = createAction(
    '[Login Resolver] Load ItemsReports'
)

export const ItemsReportsLoaded = createAction(
    '[Load ItemsReports Effect] ItemsReports Loaded',
    props<{ItemsReports: any}>()
)