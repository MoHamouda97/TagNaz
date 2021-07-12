import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IncomeExpensesReportState } from "./reducers/income-expenses.reducer";
import * as fromIncomeExpensesReport from "./reducers/income-expenses.reducer";

export const selectIncomeExpensesReportState = createFeatureSelector<IncomeExpensesReportState>('IncomeExpensesReport');

export const selectIncomeExpensesReport = createSelector(
    selectIncomeExpensesReportState,
    fromIncomeExpensesReport.selectAll
)

export const selectIncomeExpensesReportEntity = createSelector(
    selectIncomeExpensesReport,
    items => items
)

export const isIncomeExpensesReportLoaded = createSelector(
    selectIncomeExpensesReportState,
    state => state.IncomeExpensesReportLoaded
)