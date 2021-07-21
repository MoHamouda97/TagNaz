import { TransactionssService } from './../../../../../../../src/services/transactions/transactions.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-all-trans-filter',
  templateUrl: './all-trans-filter.component.html',
  styleUrls: ['./all-trans-filter.component.css']
})
export class AllTransFilterComponent implements OnInit {
  @Input('users') users: any = [];
  @Output('loading') loading: EventEmitter<any> = new EventEmitter();

  one: number = 1;
  selectedUser: any = null;

  constructor(private service: TransactionssService) { }

  ngOnInit() {
  }

  async filter(filter, val) {
    const formData = new FormData(); 
    formData.append(filter, val);

    this.loading.emit(true);

    const data = await this.service.filterTransactions(formData).toPromise(); 
    
    this.loading.emit(false);
  }

}
