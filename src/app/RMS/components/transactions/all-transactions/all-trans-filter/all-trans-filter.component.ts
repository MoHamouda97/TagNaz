import { TransactionssService } from './../../../../../../../src/services/transactions/transactions.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GenericService } from 'src/services/generic/generic.service';

@Component({
  selector: 'app-all-trans-filter',
  templateUrl: './all-trans-filter.component.html',
  styleUrls: ['./all-trans-filter.component.css']
})
export class AllTransFilterComponent implements OnInit {
  @Input('users') users: any = [];
  @Output('loading') loading: EventEmitter<any> = new EventEmitter();
  @Output('pages') pages: EventEmitter<any> = new EventEmitter();
  @Output('data') data: EventEmitter<any> = new EventEmitter();

  one: number = 1;
  selectedUser: any = null;
  date: any = '';

  constructor(private service: TransactionssService, private generic: GenericService) { }

  ngOnInit() {
  }

  async filter(filter, val, type = '') {    
    if (val === true) return;

    const formData = new FormData(); 

    if (type == 'date') val = this.generic.formatDate(this.date[0], 'filter');
    if (type == 'date') val += ` ${this.generic.formatDate(this.date[1], 'filter')}`

    formData.append(filter, val);

    this.loading.emit(true);
    console.log(`${filter} - ${val}`)
    const data: any = await this.service.filterTransactions(formData).toPromise(); 
    
    this.data.emit(data.data);
    this.pages.emit(data.pagination);
    this.loading.emit(false);
  }

}
