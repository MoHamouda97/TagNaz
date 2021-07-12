import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { ItemsReportsActions } from "../actions.types";

export interface ItemsReportsState extends EntityState<any> {
    ItemsReportsLoaded: boolean
}

export const adapter = createEntityAdapter<any>({
    selectId: ItemsReports => ItemsReports.id
})

export const initItemsReportsState = adapter.getInitialState({
    ItemsReportsLoaded: false
})

export const ItemsReportsReducer = createReducer(
    initItemsReportsState,
    on(ItemsReportsActions.ItemsReportsLoaded, (state, action) => adapter.addAll(action.ItemsReports, {...state, ItemsReportsLoaded: true})),
)

export const {selectAll} = adapter.getSelectors();