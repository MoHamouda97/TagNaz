import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ItemsReportsState } from "./reducers/items-reports.reducer";
import * as fromItemsReports from "./reducers/items-reports.reducer";

export const selectItemsReportsState = createFeatureSelector<ItemsReportsState>('ItemsReports');

export const selectItemsReports = createSelector(
    selectItemsReportsState,
    fromItemsReports.selectAll
)

export const selectItemsReportsEntity = createSelector(
    selectItemsReports,
    items => items
)

export const selectItemsReportsDetails = createSelector(
    selectItemsReports,
    items => items[0]["orderdetails"]
)

export const selectItemsReportsCategories = createSelector(
    selectItemsReports,
    items => items[0]["categories"]
)

export const isItemsReportsLoaded = createSelector(
    selectItemsReportsState,
    state => state.ItemsReportsLoaded
)