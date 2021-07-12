import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MonthReportsState } from "./reducers/month-reports.reducer";
import * as fromMonthReports from "./reducers/month-reports.reducer";

export const selectMonthReportsState = createFeatureSelector<MonthReportsState>('MonthReports');

export const selectMonthReports = createSelector(
    selectMonthReportsState,
    fromMonthReports.selectAll
)

export const selectMonthReportsEntity = createSelector(
    selectMonthReports,
    month => month
)

export const selectMonthReportsQuery = createSelector(
    selectMonthReports,
    month => month[0]["query"]
)

export const selectMonthReportsOffer = createSelector(
    selectMonthReports,
    month => month[0]['offerdetailsarray']
)

export const isMonthReportsLoaded = createSelector(
    selectMonthReportsState,
    state => state.MonthReportsLoaded
)