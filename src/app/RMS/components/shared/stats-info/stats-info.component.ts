import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-info',
  templateUrl: './stats-info.component.html',
  styleUrls: ['./stats-info.component.css']
})
export class StatsInfoComponent implements OnInit {
  @Input('infoClass') infoClass: string = '';
  @Input('infoIcon') infoIcon: string = '';
  @Input('infoTxt') infoTxt: string = '';
  @Input('infoTotal') infoTotal: any = '';

  constructor() { }

  ngOnInit() {
    this.infoTotal = (Boolean(this.infoTotal)) ? this.infoTotal.toFixed(2) : 0;
  }

}
