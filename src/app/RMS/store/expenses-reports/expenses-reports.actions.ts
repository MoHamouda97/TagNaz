import { createAction, props } from '@ngrx/store';

export const loadExpensesReports = createAction(
    '[Login Resolver] Load ExpensesReports'
)

export const ExpensesReportsLoaded = createAction(
    '[Load ExpensesReports Effect] ExpensesReports Loaded',
    props<{ExpensesReports: any}>()
)