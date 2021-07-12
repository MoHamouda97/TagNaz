import { createAction, props } from '@ngrx/store';

export const loadOtherReports = createAction(
    '[Login Resolver] Load OtherReports'
)

export const OtherReportsLoaded = createAction(
    '[Load OtherReports Effect] OtherReports Loaded',
    props<{OtherReports: any}>()
)