import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CalendarModule, CalendarDateFormatter } from 'angular-calendar';

import { DashboardRoutes } from './dashboard.routing';

import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';

import {
  InfocardComponent,
  ChatComponent,
  CommentComponent,
  TopsellComponent,
  ActivityComponent,
  BrowserStatsComponent,
  DeviceVisitsComponent,
  EarningsComponent,
  FeedsComponent,
  InfoBoxComponent,
  MixstatsComponent,
  ProductInfoComponent,
  ProjectComponent,
  ReviewComponent,
  SalesComponent,
  SalesIncomeComponent,
  TasklistComponent,
  UserProfileComponent,
  UserDetailsComponent,
  VisitorsComponent,
  VisitsBounceComponent,
  WeathercardComponent,
  WelcomeComponent
} from './dashboard-components';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ItemsReportsEffect } from '../RMS/store/items-reports/items-reports.effects';
import { ItemsReportsReducer } from '../RMS/store/items-reports/reducers/items-reports.reducer';
import { MonthReportsEffect } from '../RMS/store/month-reports/month-reports.effects';
import { MonthReportsReducer } from '../RMS/store/month-reports/reducers/month-reports.reducer';
import { SalesReportsReducer } from '../RMS/store/sales-reports/reducers/sales-reports.reducer';
import { SalesReportsEffect } from '../RMS/store/sales-reports/sales-reports.effects';
import { WeekReportsReducer } from '../RMS/store/week-reports/reducers/week-reports.reducer';
import { WeekReportsEffect } from '../RMS/store/week-reports/week-reports.effects';
import { ItemsReportsResolver } from '../authentication/login/services/items-reports.resolver';
import { MonthReportsResolver } from '../authentication/login/services/month-reports.resolver';
import { SalesReportsResolver } from '../authentication/login/services/sales-reports.resolver';
import { WeekReportsResolver } from '../authentication/login/services/week-reports.resolver';
import { SharedModule } from 'src/module/shared.module';
import { ItemsReportsComponent } from './dashboard-components/items-reports/items-reports.component';
import { OtherReportsEffect } from '../RMS/store/other-reports/other-reports.effects';
import { OtherReportsReducer } from '../RMS/store/other-reports/reducers/other-reports.reducer';
import { OtherReportsResolver } from '../authentication/login/services/other-reports.resolver';
import { IncomeExpensesReportEffect } from '../RMS/store/income-expenses/income-expenses.effects';
import { IncomeExpensesReportReducer } from '../RMS/store/income-expenses/reducers/income-expenses.reducer';
import { IncomeExpensesReportResolver } from '../authentication/login/services/income-expenses.resolver';
import { ExpensesReportsResolver } from '../authentication/login/services/expenses-reports.resolver';
import { ExpensesReportsEffect } from '../RMS/store/expenses-reports/expenses-reports.effects';
import { ExpensesReportsReducer } from '../RMS/store/expenses-reports/reducers/expenses-reports.reducer';
import { LoansReportsResolver } from '../authentication/login/services/loans-reports.resolver';
import { LoansReportsEffect } from '../RMS/store/loans-reports/loans-reports.effects';
import { LoansReportsReducer } from '../RMS/store/loans-reports/reducers/loans-reports.reducer';
import { ExpensesCatReportsResolver } from '../authentication/login/services/expenses-cat-reports.resolver';
import { ExpensesCatReportsEffect } from '../RMS/store/expenses-cat-reports/expenses-cat-reports.effects';
import { ExpensesCatReportsReducer } from '../RMS/store/expenses-cat-reports/reducers/expenses-cat-reports.reducer';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NgbModule,
    ChartsModule,
    ChartistModule,
    RouterModule.forChild(DashboardRoutes),
    PerfectScrollbarModule,
    CalendarModule.forRoot(),
    NgxChartsModule,
    NgxDatatableModule,
    EffectsModule.forFeature([
      SalesReportsEffect,
      ItemsReportsEffect,
      MonthReportsEffect,
      WeekReportsEffect,
      OtherReportsEffect,
      IncomeExpensesReportEffect,
      ExpensesReportsEffect,
      LoansReportsEffect,
      ExpensesCatReportsEffect,
    ]),
    StoreModule.forFeature('SalesReports', SalesReportsReducer), 
    StoreModule.forFeature('ItemsReports', ItemsReportsReducer), 
    StoreModule.forFeature('MonthReports', MonthReportsReducer), 
    StoreModule.forFeature('WeekReports', WeekReportsReducer), 
    StoreModule.forFeature('OtherReports', OtherReportsReducer),
    StoreModule.forFeature('IncomeExpensesReport', IncomeExpensesReportReducer), 
    StoreModule.forFeature('ExpensesReports', ExpensesReportsReducer), 
    StoreModule.forFeature('LoansReports', LoansReportsReducer), 
    StoreModule.forFeature('ExpensesCatReports', ExpensesCatReportsReducer), 
    SharedModule
  ],
  declarations: [
    Dashboard1Component,
    Dashboard2Component,
    Dashboard3Component,
    InfocardComponent,
    ChatComponent,
    CommentComponent,
    TopsellComponent,
    ActivityComponent,
    BrowserStatsComponent,
    DeviceVisitsComponent,
    EarningsComponent,
    FeedsComponent,
    InfoBoxComponent,
    MixstatsComponent,
    ProductInfoComponent,
    ProjectComponent,
    ReviewComponent,
    SalesComponent,
    SalesIncomeComponent,
    TasklistComponent,
    UserProfileComponent,
    UserDetailsComponent,
    VisitorsComponent,
    VisitsBounceComponent,
    WeathercardComponent,
    WelcomeComponent,
    ItemsReportsComponent
  ],
  providers: [
    SalesReportsResolver,
    ItemsReportsResolver,
    MonthReportsResolver,
    WeekReportsResolver,
    OtherReportsResolver,
    IncomeExpensesReportResolver,
    ExpensesReportsResolver,
    LoansReportsResolver,
    ExpensesCatReportsResolver,
  ]
})
export class DashboardModule {}
