import { createAction, props } from '@ngrx/store';

export const loadIncomeExpensesReport = createAction(
    '[Login Resolver] Load IncomeExpensesReport'
)

export const IncomeExpensesReportLoaded = createAction(
    '[Load IncomeExpensesReport Effect] IncomeExpensesReport Loaded',
    props<{IncomeExpensesReport: any}>()
)