import { TransactionssService } from './../../../../../../../src/services/transactions/transactions.service';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { TransHelper } from '../classes/trans-helper';

@Component({
  selector: 'app-all-trans-tbl',
  templateUrl: './all-trans-tbl.component.html',
  styleUrls: ['./all-trans-tbl.component.css']
})
export class AllTransTblComponent implements OnInit, OnChanges {
  @Input('data') data: any[] = [];
  @Input('pages') pages: any = {};
  @Input('loading') loading: boolean = false;

  header: any[] = [
    '#',
    'الوكيل',
    'المكتب',
    'المبلغ',
    'الرصيد السابق',
    'التاريخ',
  ];
  
  constructor(private service: TransactionssService, private helper: TransHelper) {}

  ngOnInit() {
  }

  async onPageChange(page) {
    this.loading = true;
    const data = await this.service.getTrancsactions(page).toPromise();
    this.data = this.helper.shapeData(data.data)
    this.loading = false;
  }

  ngOnChanges(changes: SimpleChanges) {

    for (const prop in changes) {
      if (changes.hasOwnProperty(prop)) {
        switch(prop) {
          case 'data' : 
            this.data = this.helper.shapeData(changes.data.currentValue);
            break;
          case 'loading' : 
            this.loading = changes.loading.currentValue;
            break;
        }
      }
    }

  }

}
