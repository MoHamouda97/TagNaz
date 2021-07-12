import { createAction, props } from '@ngrx/store';

export const loadExpensesCatReports = createAction(
    '[Login Resolver] Load ExpensesCatReports'
)

export const ExpensesCatReportsLoaded = createAction(
    '[Load ExpensesCatReports Effect] ExpensesCatReports Loaded',
    props<{ExpensesCatReports: any}>()
)