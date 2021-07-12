import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { IncomeExpensesReportActions } from "../actions.types";

export interface IncomeExpensesReportState extends EntityState<any> {
    IncomeExpensesReportLoaded: boolean
}

export const adapter = createEntityAdapter<any>({
    selectId: IncomeExpensesReport => IncomeExpensesReport.id
})

export const initIncomeExpensesReportState = adapter.getInitialState({
    IncomeExpensesReportLoaded: false
})

export const IncomeExpensesReportReducer = createReducer(
    initIncomeExpensesReportState,
    on(IncomeExpensesReportActions.IncomeExpensesReportLoaded, (state, action) => adapter.addAll(action.IncomeExpensesReport, {...state, IncomeExpensesReportLoaded: true})),
)

export const {selectAll} = adapter.getSelectors();