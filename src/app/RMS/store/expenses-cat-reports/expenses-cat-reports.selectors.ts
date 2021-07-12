import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ExpensesCatReportsState } from "./reducers/expenses-cat-reports.reducer";
import * as fromExpensesCatReports from "./reducers/expenses-cat-reports.reducer";

export const selectExpensesCatReportsState = createFeatureSelector<ExpensesCatReportsState>('ExpensesCatReports');

export const selectExpensesCatReports = createSelector(
    selectExpensesCatReportsState,
    fromExpensesCatReports.selectAll
)

export const selectExpensesCatReportsEntity = createSelector(
    selectExpensesCatReports,
    ExpensesCat => ExpensesCat
)

export const selectExpensesCatReportsQuery = createSelector(
    selectExpensesCatReports,
    ExpensesCat => ExpensesCat[0]['query']
)

export const selectExpensesCatReportsOffer = createSelector(
    selectExpensesCatReports,
    ExpensesCat => ExpensesCat[0]['offerdetailsarray']
)

export const isExpensesCatReportsLoaded = createSelector(
    selectExpensesCatReportsState,
    state => state.ExpensesCatReportsLoaded
)