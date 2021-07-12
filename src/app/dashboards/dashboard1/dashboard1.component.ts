import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/apps/email/app.state';
import * as lang from './../../../settings/lang';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements OnInit {  
  lang: any = lang.ar

  totTransactions: any = 0;
  transactions: any[] = [];
  reports: any[] = [];
  weekordersByCompaniesForWeek: any[] = [];
  monthordersByCompaniesForMonth: any[] = [];
  monthordersByUsersForMonth: any[] = [];
  weekordersByUsersForWeek: any[] = [];

  header: string[] = [
    'اسم المستخدم',
    'عدد الطلبات',
    'اجمالي الطلبات',
    'اجمالي الارباح',
  ]

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(
      res => {
        console.log(res.reports)
        this.totTransactions = res["transactionsTot"]["trandata"][0]["Transactionstotals"];
        this.transactions = this.createTransactionsObject(res.AllTransactions.trandata);
        this.reports = res.reports;
        this.weekordersByCompaniesForWeek = this.createObject(this.reports["weekordersByCompaniesForWeek"], 'comp');
        this.monthordersByCompaniesForMonth = this.createObject(this.reports["monthordersByCompaniesForMonth"], 'comp');
        this.monthordersByUsersForMonth = this.createObject(this.reports["monthordersByUsersForMonth"], 'user');
        this.weekordersByUsersForWeek = this.createObject(this.reports["weekordersByUsersForWeek"], 'user');
      }
    )
  }

  createTransactionsObject(data: any[]) {
    let trnas: any[] = data.map(val => {return {user: (Boolean(val["user"])) ? val["user"]["username"] : '', count: val["TrancsactionCount"], total: val["TrancsactionTotal"]}});
    return trnas;
  }

  createObject(data: any[], type) {
    let objects: any[] = 
    (type == 'comp') 
      ? data.map(val => {return {package: (Boolean(val["package"])) ? val["package"]["company"]['name'] : '', Ordertotals: val["Ordertotals"], Profittotals: val["Profittotals"]}})
      : data.map(val => {return {package: (Boolean(val["user"])) ? val["user"]["username"] : '', OrdersCount: val["OrdersCount"], Ordertotals: val["Ordertotals"], Profittotals: val["Profittotals"]}})
    return objects;
  }

}
