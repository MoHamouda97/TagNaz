import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { LoansReportsActions } from "../actions.types";

export interface LoansReportsState extends EntityState<any> {
    LoansReportsLoaded: boolean
}

export const adapter = createEntityAdapter<any>({
    selectId: LoansReports => LoansReports.id
})

export const initLoansReportsState = adapter.getInitialState({
    LoansReportsLoaded: false
})

export const LoansReportsReducer = createReducer(
    initLoansReportsState,
    on(LoansReportsActions.LoansReportsLoaded, (state, action) => adapter.addAll(action.LoansReports, {...state, LoansReportsLoaded: true})),
)

export const {selectAll} = adapter.getSelectors();