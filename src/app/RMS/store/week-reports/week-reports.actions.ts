import { createAction, props } from '@ngrx/store';

export const loadWeekReports = createAction(
    '[Login Resolver] Load WeekReports'
)

export const WeekReportsLoaded = createAction(
    '[Load WeekReports Effect] WeekReports Loaded',
    props<{WeekReports: any}>()
)