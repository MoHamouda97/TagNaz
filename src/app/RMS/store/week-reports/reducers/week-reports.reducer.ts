import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { WeekReportsActions } from "../actions.types";

export interface WeekReportsState extends EntityState<any> {
    WeekReportsLoaded: boolean
}

export const adapter = createEntityAdapter<any>({
    selectId: WeekReports => WeekReports.id
})

export const initWeekReportsState = adapter.getInitialState({
    WeekReportsLoaded: false
})

export const WeekReportsReducer = createReducer(
    initWeekReportsState,
    on(WeekReportsActions.WeekReportsLoaded, (state, action) => adapter.addAll(action.WeekReports, {...state, WeekReportsLoaded: true})),
)

export const {selectAll} = adapter.getSelectors();