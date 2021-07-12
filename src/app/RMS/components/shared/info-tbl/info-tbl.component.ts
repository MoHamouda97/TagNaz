import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-tbl',
  templateUrl: './info-tbl.component.html',
  styleUrls: ['./info-tbl.component.css']
})
export class InfoTblComponent implements OnInit {
  @Input('data') data: any[] = [];
  @Input('header') header: any[] = [];
  @Input('title') title: string = '';
  
  constructor() { }

  ngOnInit() {
  }

}
