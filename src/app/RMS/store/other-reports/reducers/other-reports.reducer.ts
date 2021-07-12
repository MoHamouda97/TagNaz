import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { OtherReportsActions } from "../actions.types";

export interface OtherReportsState extends EntityState<any> {
    OtherReportsLoaded: boolean
}

export const adapter = createEntityAdapter<any>({
    selectId: OtherReports => OtherReports.id
})

export const initOtherReportsState = adapter.getInitialState({
    OtherReportsLoaded: false
})

export const OtherReportsReducer = createReducer(
    initOtherReportsState,
    on(OtherReportsActions.OtherReportsLoaded, (state, action) => adapter.addAll(action.OtherReports, {...state, OtherReportsLoaded: true})),
)

export const {selectAll} = adapter.getSelectors();