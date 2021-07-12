import { createFeatureSelector, createSelector } from "@ngrx/store";
import { OtherReportsState } from "./reducers/other-reports.reducer";
import * as fromOtherReports from "./reducers/other-reports.reducer";

export const selectOtherReportsState = createFeatureSelector<OtherReportsState>('OtherReports');

export const selectOtherReports = createSelector(
    selectOtherReportsState,
    fromOtherReports.selectAll
)

export const selectOtherReportsEntity = createSelector(
    selectOtherReports,
    other => other
)

export const selectMarketersOrders = createSelector(
    selectOtherReports,
    other => other[0]["MarketersOrders"]
)

export const selectPlatformsOrders = createSelector(
    selectOtherReports,
    other => other[0]["PlatformsOrders"]
)

export const selectPaymenttypesOrders = createSelector(
    selectOtherReports,
    other => other[0]["PaymenttypesOrders"]
)

export const isOtherReportsLoaded = createSelector(
    selectOtherReportsState,
    state => state.OtherReportsLoaded
)