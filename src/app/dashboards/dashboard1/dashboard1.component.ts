import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/apps/email/app.state';
import { selectTotalMonthChart, selectTotalMonthSales, selectTotalWeekChart, selectTotalWeekSales } from 'src/app/RMS/store/sales-reports/sales-reports.selectors';
import * as lang from './../../../settings/lang';
import { selectWeekReportsOffer, selectWeekReportsQuery } from 'src/app/RMS/store/week-reports/week-reports.selectors';
import { selectMonthReportsOffer, selectMonthReportsQuery } from 'src/app/RMS/store/month-reports/month-reports.selectors';
import { selectItemsReportsCategories, selectItemsReportsDetails } from 'src/app/RMS/store/items-reports/items-reports.selectors';
import { selectMarketersOrders, selectPaymenttypesOrders, selectPlatformsOrders } from 'src/app/RMS/store/other-reports/other-reports.selectors';
import { selectIncomeExpensesReportEntity } from 'src/app/RMS/store/income-expenses/income-expenses.selectors';
import { selectExpensesReportsQuery } from 'src/app/RMS/store/expenses-reports/expenses-reports.selectors';
import { selectLoansReportsQuery } from 'src/app/RMS/store/loans-reports/loans-reports.selectors';
import { selectExpensesCatReportsQuery } from 'src/app/RMS/store/expenses-cat-reports/expenses-cat-reports.selectors';

@Component({
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements OnInit {

  totMonthSales$: Observable<any>;
  totWeekSales$: Observable<any>;
  monthChart$: Observable<any>;
  weekChart$: Observable<any>;
  weekQueryChart$: Observable<any>;
  weekOfferChart$: Observable<any>;
  monthQueryChart$: Observable<any>;
  monthOfferChart$: Observable<any>;
  itemsDetails$: Observable<any>;
  itemsCategories$: Observable<any>;
  marketersOrders$: Observable<any>;
  platFormsOrders$: Observable<any>;
  payments$: Observable<any>;
  incomeExpenses$: Observable<any>;
  expenses$: Observable<any>;
  loans$: Observable<any>;
  expensesCat$: Observable<any>;

  allWeekChartData: any = [];
  allMonthChartData: any = [];
  marketersOrders: any[] = [];
  platFormsOrders: any[] = [];
  payments: any[] = [];
  incomeExpenses: any[] = [];
  expensessTotal: number = 0;
  loansTotal: number = 0;

  incomeExpensesHeader: any[] = [
    'التاريخ',
    'الخصم',
    'الايراد',
    'الخدمة',
    'الضريبة',
    'التكلفة',
    'السلف',
    'الصافي',
    'التراكمي',
  ]

  monthColors: any[] = ['#4798e8', '#01c0c8'];

  lang: any = lang.ar

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.totMonthSales$ = this.store.pipe(select(selectTotalMonthSales));
    this.totWeekSales$ = this.store.pipe(select(selectTotalWeekSales));

    this.monthChart$ = this.store.pipe(select(selectTotalMonthChart));
    this.weekChart$ = this.store.pipe(select(selectTotalWeekChart));

    this.weekQueryChart$ = this.store.pipe(select(selectWeekReportsQuery))
    this.weekQueryChart$.subscribe(res => this.allWeekChartData = res);

    this.weekOfferChart$ = this.store.pipe(select(selectWeekReportsOffer));
    this.weekOfferChart$.subscribe(
      res => {
        const sushiData = { SumTotal: res['سوشي'], catname: 'عروض السوشي'};
        const chineseData = { SumTotal: res['صيني'], catname: 'عروض الصيني'};
        this.allWeekChartData = [sushiData, chineseData, ...this.allWeekChartData];
      });

    this.monthQueryChart$ = this.store.pipe(select(selectMonthReportsQuery));
    this.monthQueryChart$.subscribe(res => this.allMonthChartData = res);

    this.monthOfferChart$ = this.store.pipe(select(selectMonthReportsOffer));
    this.monthOfferChart$.subscribe(
      res => {
        const sushiData = { SumTotal: res['سوشي'], catname: 'عروض السوشي'};
        const chineseData = { SumTotal: res['صيني'], catname: 'عروض الصيني'};
        this.allMonthChartData = [sushiData, chineseData, ...this.allMonthChartData];
      }
    )

    this.itemsDetails$ = this.store.pipe(select(selectItemsReportsDetails));
    this.itemsCategories$ = this.store.pipe(select(selectItemsReportsCategories));

    this.marketersOrders$ = this.store.pipe(select(selectMarketersOrders));
    this.marketersOrders$.subscribe(res => this.marketersOrders = res);

    this.platFormsOrders$ = this.store.pipe(select(selectPlatformsOrders));
    this.platFormsOrders$.subscribe(res => this.platFormsOrders = res);
    this.platFormsOrders = this.platFormsOrders.filter(p => Boolean(p["platform"]))

    this.payments$ = this.store.pipe(select(selectPaymenttypesOrders));
    this.payments$.subscribe(res => this.payments = res);
    this.payments = this.payments.filter(p => Boolean(p["paymenttype"]))

    this.incomeExpenses$ = this.store.pipe(select(selectIncomeExpensesReportEntity));
    this.incomeExpenses$.subscribe( res => this.incomeExpenses = this.moneyFlow(res[0]["allsales"], res[0]["Expenses"], res[0]["StaffPayments"]) )
    
    this.expenses$ = this.store.pipe(select(selectExpensesReportsQuery));
    this.expenses$.subscribe(res => this.expensessTotal = res.map(val => {return val["SumTotal"]}).reduce((prev, curr) => prev + curr) )
  
    this.loans$ = this.store.pipe(select(selectLoansReportsQuery));
    this.loans$.subscribe(res => (res.length > 0) ? this.loansTotal = res[0]["SumTotal"] : this.loansTotal = 0);

    this.expensesCat$ = this.store.pipe(select(selectExpensesCatReportsQuery));
  }

  moneyFlow(income: any[], expenses: any[], loans: any[]) {
    let incomeExpenses: any [] = [];

    income.forEach((val, index) => {
      let expense = (index < expenses.length) ? expenses[index]["SumTotal"] : 0;
      let net = val["SumTotal"] - expense;
      let loan = (index < loans.length) ? loans[index]["SumTotal"] : 0;
      let existing = (Boolean(index)) ? net + incomeExpenses[index - 1]["existing"] : net;

      let moneyFlow = Object.assign({}, val, { expense:  expense, loan: loan, net: net, existing: existing});

      incomeExpenses = [...incomeExpenses, moneyFlow]
    });

    return incomeExpenses;
  }

}
