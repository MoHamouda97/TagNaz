import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ExpensesReportsState } from "./reducers/expenses-reports.reducer";
import * as fromExpensesReports from "./reducers/expenses-reports.reducer";

export const selectExpensesReportsState = createFeatureSelector<ExpensesReportsState>('ExpensesReports');

export const selectExpensesReports = createSelector(
    selectExpensesReportsState,
    fromExpensesReports.selectAll
)

export const selectExpensesReportsEntity = createSelector(
    selectExpensesReports,
    Expenses => Expenses
)

export const selectExpensesReportsQuery = createSelector(
    selectExpensesReports,
    Expenses => Expenses[0]['query']
)

export const selectExpensesReportsOffer = createSelector(
    selectExpensesReports,
    Expenses => Expenses[0]['offerdetailsarray']
)

export const isExpensesReportsLoaded = createSelector(
    selectExpensesReportsState,
    state => state.ExpensesReportsLoaded
)