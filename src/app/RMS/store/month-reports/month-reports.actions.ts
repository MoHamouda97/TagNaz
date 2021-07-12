import { createAction, props } from '@ngrx/store';

export const loadMonthReports = createAction(
    '[Login Resolver] Load MonthReports'
)

export const MonthReportsLoaded = createAction(
    '[Load MonthReports Effect] MonthReports Loaded',
    props<{MonthReports: any}>()
)