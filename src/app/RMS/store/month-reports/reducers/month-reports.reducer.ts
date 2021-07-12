import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { MonthReportsActions } from "../actions.types";

export interface MonthReportsState extends EntityState<any> {
    MonthReportsLoaded: boolean
}

export const adapter = createEntityAdapter<any>({
    selectId: MonthReports => MonthReports.id
})

export const initMonthReportsState = adapter.getInitialState({
    MonthReportsLoaded: false
})

export const MonthReportsReducer = createReducer(
    initMonthReportsState,
    on(MonthReportsActions.MonthReportsLoaded, (state, action) => adapter.addAll(action.MonthReports, {...state, MonthReportsLoaded: true})),
)

export const {selectAll} = adapter.getSelectors();