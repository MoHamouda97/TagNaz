import { createAction, props } from '@ngrx/store';

export const loadSalesReports = createAction(
    '[Login Resolver] Load SalesReports'
)

export const SalesReportsLoaded = createAction(
    '[Load SalesReports Effect] SalesReports Loaded',
    props<{SalesReports: any}>()
)