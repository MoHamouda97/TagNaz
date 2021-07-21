import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as lang from './../../../../../settings/lang';

@Component({
  selector: 'app-all-transactions',
  templateUrl: './all-transactions.component.html',
  styleUrls: ['./all-transactions.component.css']
})
export class AllTransactionsComponent implements OnInit {
  lang: any = lang.ar
  transactions: any[] = [];
  users: any = {};
  pages: any = {};
  loading: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      res => {
        this.transactions = res.trans.data
        this.users = [...Object.entries(res.trans.users)];
        this.pages = res.trans.pagination
      }
    )
  }

}
