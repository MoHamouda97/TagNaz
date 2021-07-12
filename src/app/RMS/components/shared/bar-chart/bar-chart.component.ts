import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as c3 from 'c3';
import Chart from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, AfterViewInit {
  @Input('sales') sales: any[] = [];
  @Input('color') color: any = '';
  @Input('title') title: string = '';
  @Input('type') type: string = '';
  @Input('selector') selector: string = '';
  @Input('orderLabelsKey') orderLabelsKey: string = '';
  @Input('orderTotalKey') orderTotalKey: string = '';
  
  orderLabels: any[] = [];
  orderTotal: any[] = [];

  colors: any = [
    'rgba(255, 99, 132, .7)',
    'rgba(255, 159, 64, .7)',
    'rgba(255, 205, 86, .7)',
    'rgba(75, 192, 192, .7)',
    'rgba(54, 162, 235, .7)',
    'rgba(153, 102, 255, .7)',
    'rgba(201, 203, 207, .7)',
    'rgba(187, 135, 96, .7)',
    'rgba(79, 14, 14, .7)'
  ];

  chartColors: any[] = [];

  datasets: any[] = [];

  constructor() { }

  ngOnInit() {
    (this.selector == 'week-chart') 
    ? this.orderLabels = [
      'الجمعة',
      'السبت',
      'الأحد',
      'الاثنين',
      'الثلاثاء',
      'الاربعاء',
      'الخميس',
    ].reverse() : this.orderLabels = this.sales.map(s => `${s[this.orderLabelsKey]} - ${s[this.orderTotalKey].toFixed(2)}`);

    this.orderTotal = this.sales.map(s => parseFloat(s[this.orderTotalKey].toFixed(2)));
    
    (this.selector == 'week-chart') && this.orderTotal.reverse();
  }

  ngAfterViewInit() {
    let ctx = document.getElementById(this.selector);

    let chart = new Chart(ctx, {
      type: this.type,
      data: {
        labels: [...this.orderLabels],
        datasets: [
          {
            label: this.title,
            data: [...this.orderTotal],
            borderColor: this.colors,
            backgroundColor: (this.type == 'line') ? '' : this.colors,
          }
        ]
      }
    })
  }  

}
