import { Routes } from '@angular/router';

import { NotfoundComponent } from './404/not-found.component';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';
import { IncomeExpensesReportResolver } from './login/services/income-expenses.resolver';
import { ItemsReportsResolver } from './login/services/items-reports.resolver';
import { MonthReportsResolver } from './login/services/month-reports.resolver';
import { OtherReportsResolver } from './login/services/other-reports.resolver';
import { SalesReportsResolver } from './login/services/sales-reports.resolver';
import { WeekReportsResolver } from './login/services/week-reports.resolver';
import { Login2Component } from './login2/login2.component';
import { SignupComponent } from './signup/signup.component';
import { Signup2Component } from './signup2/signup2.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '404',
        component: NotfoundComponent
      },
      {
        path: 'lock',
        component: LockComponent
      },
      {
        path: 'login',
        component: LoginComponent,
        resolve: {
          SalesReports: SalesReportsResolver,
          ItemsReports: ItemsReportsResolver,
          MonthReports: MonthReportsResolver,
          WeekReports: WeekReportsResolver,
          OtherReports: OtherReportsResolver,
          IncomeExpensesReport: IncomeExpensesReportResolver,
        }
      },
      {
        path: 'login2',
        component: Login2Component
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'signup2',
        component: Signup2Component
      }
    ]
  }
];
