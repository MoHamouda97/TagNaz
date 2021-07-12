import { StaffService } from './../../../../../services/staff/staff.service';
import { Component, OnInit, Input } from '@angular/core';
import { ExpensessService } from 'src/services/expensess/expensess.service';

@Component({
  selector: 'app-info-tbl',
  templateUrl: './info-tbl.component.html',
  styleUrls: ['./info-tbl.component.css']
})
export class InfoTblComponent implements OnInit {
  @Input('data') data: any[] = [];
  @Input('header') header: any[] = [];
  @Input('title') title: string = '';

  isVisible: boolean = false;
  expensessData: any[] = [];

  isLoanVisible: boolean = false;
  LoansData: any[] = [];

  constructor(private service: ExpensessService, private staff: StaffService) { }

  ngOnInit() {
  }

  getDetails(title, date) {
    switch(title) {
      case 'expense' : 
        {this.getExpensessDetails(date)}
      break;
      case 'loan' : 
        {this.getLoansDetails(date)} 
      break;
    }    
  }

  async getExpensessDetails(date) {
    let traget = {date: date}
    let expensess = await this.service.getExpensessDetails(traget).toPromise();
    this.expensessData = expensess["query"];
    this.isVisible = true
  }

  async getLoansDetails(date) {
    let traget = {date: date}
    let loans = await this.staff.getLoansDetails(traget).toPromise();
    this.LoansData = loans["query"];
    this.isLoanVisible = true
  }

}
