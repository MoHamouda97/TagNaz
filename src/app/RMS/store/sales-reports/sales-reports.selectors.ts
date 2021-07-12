import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SalesReportsState } from "./reducers/sales-reports.reducer";
import * as fromSalesReports from "./reducers/sales-reports.reducer";

export const selectSalesReportsState = createFeatureSelector<SalesReportsState>('SalesReports');

export const selectSalesReports = createSelector(
    selectSalesReportsState,
    fromSalesReports.selectAll
)

export const selectSalesReportsEntity = createSelector(
    selectSalesReports,
    sales => sales
)

export const selectTotalMonthSales = createSelector(
    selectSalesReports,
    sales => sales[0]["monthorders"]
)

export const selectTotalWeekSales = createSelector(
    selectSalesReports,
    sales => sales[0]["weekorders"]
)

export const selectTotalMonthChart = createSelector(
    selectSalesReports,
    sales => sales[0]["monthordersForchart"]
)

export const selectTotalWeekChart = createSelector(
    selectSalesReports,
    sales => sales[0]["weekordersForchart"]
)

export const isSalesReportsLoaded = createSelector(
    selectSalesReportsState,
    state => state.SalesReportsLoaded
)

/*
monthorders: [{…}]
monthordersForchart: (30) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
weekorders: [{…}]
weekordersForchart: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
*/