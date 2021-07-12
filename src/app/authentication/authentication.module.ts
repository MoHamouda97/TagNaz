import { SharedModule } from './../../module/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NotfoundComponent } from './404/not-found.component';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { SignupComponent } from './signup/signup.component';
import { Signup2Component } from './signup2/signup2.component';

import { AuthenticationRoutes } from './authentication.routing';
import { EffectsModule } from '@ngrx/effects';
import { SalesReportsEffect } from '../RMS/store/sales-reports/sales-reports.effects';
import { StoreModule } from '@ngrx/store';
import { SalesReportsReducer } from '../RMS/store/sales-reports/reducers/sales-reports.reducer';
import { SalesReportsResolver } from './login/services/sales-reports.resolver';
import { ItemsReportsEffect } from '../RMS/store/items-reports/items-reports.effects';
import { ItemsReportsReducer } from '../RMS/store/items-reports/reducers/items-reports.reducer';
import { ItemsReportsResolver } from './login/services/items-reports.resolver';
import { MonthReportsResolver } from './login/services/month-reports.resolver';
import { MonthReportsReducer } from '../RMS/store/month-reports/reducers/month-reports.reducer';
import { MonthReportsEffect } from '../RMS/store/month-reports/month-reports.effects';
import { WeekReportsEffect } from '../RMS/store/week-reports/week-reports.effects';
import { WeekReportsReducer } from '../RMS/store/week-reports/reducers/week-reports.reducer';
import { WeekReportsResolver } from './login/services/week-reports.resolver';
import { OtherReportsResolver } from './login/services/other-reports.resolver';
import { OtherReportsEffect } from '../RMS/store/other-reports/other-reports.effects';
import { OtherReportsReducer } from '../RMS/store/other-reports/reducers/other-reports.reducer';
import { IncomeExpensesReportEffect } from '../RMS/store/income-expenses/income-expenses.effects';
import { IncomeExpensesReportReducer } from '../RMS/store/income-expenses/reducers/income-expenses.reducer';
import { IncomeExpensesReportResolver } from './login/services/income-expenses.resolver';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    NgbModule,
    SharedModule,
    EffectsModule.forFeature([
      SalesReportsEffect,
      ItemsReportsEffect,
      MonthReportsEffect,
      WeekReportsEffect,
      OtherReportsEffect,
      IncomeExpensesReportEffect,
    ]),
    StoreModule.forFeature('SalesReports', SalesReportsReducer), 
    StoreModule.forFeature('ItemsReports', ItemsReportsReducer), 
    StoreModule.forFeature('MonthReports', MonthReportsReducer), 
    StoreModule.forFeature('WeekReports', WeekReportsReducer), 
    StoreModule.forFeature('OtherReports', OtherReportsReducer), 
    StoreModule.forFeature('IncomeExpensesReport', IncomeExpensesReportReducer), 
  ],
  declarations: [
    NotfoundComponent,
    LoginComponent,
    SignupComponent,
    LockComponent,
    Login2Component,
    Signup2Component,    
  ],
  providers: [
    SalesReportsResolver,
    ItemsReportsResolver,
    MonthReportsResolver,
    WeekReportsResolver,
    OtherReportsResolver,
    IncomeExpensesReportResolver
  ]
})
export class AuthenticationModule {}
