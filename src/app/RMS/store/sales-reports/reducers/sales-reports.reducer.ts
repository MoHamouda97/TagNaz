import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { SalesReportsActions } from "../actions.types";

export interface SalesReportsState extends EntityState<any> {
    SalesReportsLoaded: boolean
}

export const adapter = createEntityAdapter<any>({
    selectId: SalesReports => SalesReports.id
})

export const initSalesReportsState = adapter.getInitialState({
    SalesReportsLoaded: false
})

export const SalesReportsReducer = createReducer(
    initSalesReportsState,
    on(SalesReportsActions.SalesReportsLoaded, (state, action) => adapter.addAll(action.SalesReports, {...state, SalesReportsLoaded: true})),
)

export const {selectAll} = adapter.getSelectors();