import { Component, Input, OnInit } from '@angular/core';
import * as lang from './../../../../settings/lang';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html'
})
export class InfocardComponent implements OnInit {
  @Input('totMonthSales') totMonthSales: any = [];
  @Input('totWeekSales') totWeekSales: any = [];

  lang: any = lang.ar;
  
  constructor() {}

  ngOnInit() {
    this.totMonthSales = (Boolean(this.totMonthSales[0]["Ordertotals"])) ? this.totMonthSales[0]["Ordertotals"].toFixed(2) : 0;
    this.totWeekSales = (Boolean(this.totWeekSales[0]["Ordertotals"])) ? this.totWeekSales[0]["Ordertotals"].toFixed(2) : 0;
  }
}
