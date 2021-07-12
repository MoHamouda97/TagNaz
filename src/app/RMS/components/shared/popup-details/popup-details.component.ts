import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-popup-details',
  templateUrl: './popup-details.component.html',
  styleUrls: ['./popup-details.component.css']
})
export class PopupDetailsComponent implements OnInit, OnChanges {
  @Input('data') data: any;
  @Input('title') title: string;
  @Input('header') header: any[] = [];
  @Input('isVisible') isVisible: boolean = false;

  // data to be sent to parent
  @Output('closeDV') closeDV : EventEmitter<any> = new EventEmitter();

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
          case 'title' :
            this.title = changes.title.currentValue;            
            break; 
          case 'isVisible' :
            this.isVisible = changes.isVisible.currentValue;           
            break;                                  
        }
      }
    } 
               
  }      

}
