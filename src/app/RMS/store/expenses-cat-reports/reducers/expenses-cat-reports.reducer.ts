import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { ExpensesCatReportsActions } from "../actions.types";

export interface ExpensesCatReportsState extends EntityState<any> {
    ExpensesCatReportsLoaded: boolean
}

export const adapter = createEntityAdapter<any>({
    selectId: ExpensesCatReports => ExpensesCatReports.id
})

export const initExpensesCatReportsState = adapter.getInitialState({
    ExpensesCatReportsLoaded: false
})

export const ExpensesCatReportsReducer = createReducer(
    initExpensesCatReportsState,
    on(ExpensesCatReportsActions.ExpensesCatReportsLoaded, (state, action) => adapter.addAll(action.ExpensesCatReports, {...state, ExpensesCatReportsLoaded: true})),
)

export const {selectAll} = adapter.getSelectors();