import { createFeatureSelector, createSelector } from "@ngrx/store";
import { WeekReportsState } from "./reducers/week-reports.reducer";
import * as fromWeekReports from "./reducers/week-reports.reducer";

export const selectWeekReportsState = createFeatureSelector<WeekReportsState>('WeekReports');

export const selectWeekReports = createSelector(
    selectWeekReportsState,
    fromWeekReports.selectAll
)

export const selectWeekReportsEntity = createSelector(
    selectWeekReports,
    week => week
)

export const selectWeekReportsQuery = createSelector(
    selectWeekReports,
    week => week[0]['query']
)

export const selectWeekReportsOffer = createSelector(
    selectWeekReports,
    week => week[0]['offerdetailsarray']
)

export const isWeekReportsLoaded = createSelector(
    selectWeekReportsState,
    state => state.WeekReportsLoaded
)