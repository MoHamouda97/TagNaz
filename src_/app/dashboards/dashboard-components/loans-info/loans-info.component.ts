import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-loans-info',
  templateUrl: './loans-info.component.html',
  styleUrls: ['./loans-info.component.css']
})
export class LoansInfoComponent implements OnInit, OnChanges {
  @Input('data') data: any[] = [];
  @Input('isVisible') isVisible: boolean = false;

  // data to be sent to parent
  @Output('closeDV') closeDV : EventEmitter<any> = new EventEmitter();
  
  header: any[] = [ 
    '#', 
    'الاسم',
    'الملاحظات',
  ]; 

  constructor() { }

  ngOnInit() {
  }

  handleCancel() {
    this.isVisible = false;
    this.closeDV.emit(false);
  }  
  
  ngOnChanges(changes: SimpleChanges) {
    
    for (const prop in changes) {
      if (changes.hasOwnProperty(prop)) {
        switch(prop) {
          case 'data' :
            this.data = changes.data.currentValue;        
            break;
          case 'isVisible' :
            this.isVisible = changes.isVisible.currentValue;           
            break;                                  
        }
      }
    } 
               
  } 
}
