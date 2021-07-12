import { createAction, props } from '@ngrx/store';

export const loadLoansReports = createAction(
    '[Login Resolver] Load LoansReports'
)

export const LoansReportsLoaded = createAction(
    '[Load LoansReports Effect] LoansReports Loaded',
    props<{LoansReports: any}>()
)