import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { ExpensesReportsActions } from "../actions.types";

export interface ExpensesReportsState extends EntityState<any> {
    ExpensesReportsLoaded: boolean
}

export const adapter = createEntityAdapter<any>({
    selectId: ExpensesReports => ExpensesReports.id
})

export const initExpensesReportsState = adapter.getInitialState({
    ExpensesReportsLoaded: false
})

export const ExpensesReportsReducer = createReducer(
    initExpensesReportsState,
    on(ExpensesReportsActions.ExpensesReportsLoaded, (state, action) => adapter.addAll(action.ExpensesReports, {...state, ExpensesReportsLoaded: true})),
)

export const {selectAll} = adapter.getSelectors();