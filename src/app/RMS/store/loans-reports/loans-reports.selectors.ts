import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoansReportsState } from "./reducers/loans-reports.reducer";
import * as fromLoansReports from "./reducers/loans-reports.reducer";

export const selectLoansReportsState = createFeatureSelector<LoansReportsState>('LoansReports');

export const selectLoansReports = createSelector(
    selectLoansReportsState,
    fromLoansReports.selectAll
)

export const selectLoansReportsEntity = createSelector(
    selectLoansReports,
    Loans => Loans
)

export const selectLoansReportsQuery = createSelector(
    selectLoansReports,
    Loans => Loans[0]['query']
)

export const selectLoansReportsOffer = createSelector(
    selectLoansReports,
    Loans => Loans[0]['offerdetailsarray']
)

export const isLoansReportsLoaded = createSelector(
    selectLoansReportsState,
    state => state.LoansReportsLoaded
)