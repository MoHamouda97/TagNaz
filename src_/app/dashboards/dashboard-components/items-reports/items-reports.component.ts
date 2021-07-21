import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import * as lang from './../../../../settings/lang';

@Component({
  selector: 'app-items-reports',
  templateUrl: './items-reports.component.html',
  styleUrls: ['./items-reports.component.css']
})
export class ItemsReportsComponent implements OnInit {
  @Input('title') title: string = '';
  @Input('data') data: any[] = [];

  lang: any = lang.ar;

  header: any[] = [ 
    'اسم المحول',
    'عدد التحويلات', 
    'القيمة',    
  ]; 
    
  isLoading: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }


}
