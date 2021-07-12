import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { OrdersService } from 'src/services/orders/orders.service';
import * as lang from './../../../../settings/lang';

@Component({
  selector: 'app-items-reports',
  templateUrl: './items-reports.component.html',
  styleUrls: ['./items-reports.component.css']
})
export class ItemsReportsComponent implements OnInit {
  @Input('title') title: string = '';
  @Input('data') data: any[] = [];
  @Input('categories') categories: any[] = [];

  filterBy: any[] = [];
  selectedValue: any = null

  lang: any = lang.ar;

  header: any[] = [ 
    '#', 
    'رقم الطلب',
    'القسم',
    'العنصر',
    'السعر',
    'الاجمالي'
  ]; 
  
  itemRecipes: any = [];
  isVisible: boolean = false;
  
  popupHeader: any[] = [
    '#',
    'العنصر',
    'السعر',
    'الكمية',
  ];

  isLoading: boolean = false;

  constructor(private service: OrdersService, private fb: FormBuilder) { }

  ngOnInit() {
  }

  getRecipes(receipes: any[]) {
    (receipes.length == 0) ? this.itemRecipes = [] : this.itemRecipes = this.createRecipes(receipes);
    this.isVisible = true;
  }

  createRecipes(receipes: any[]) {
    let rec: any[] = [];

    receipes.forEach(val => {
      let {avrg_price, branch_id, category_id, created, modified, supplier_id, unit_id, ...rest} = val.product;
      rec.push(rest);
    });

    return rec;
  }

  async filter(val) {  
    this.isLoading = true;
      
    const formData = new FormData();
    formData.append('Filter[Items][Subcategories][category_id]', val)
    
    let data = await this.service.filterOrders(formData).toPromise();
    this.data = data["orderdetails"]

    this.isLoading = false
  }

}
