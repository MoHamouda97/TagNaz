import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import * as lang from './../../settings/lang';

@Injectable({
  providedIn: 'root'
})
export class GenericService {
  lang: any = lang.ar;

  constructor(private notification: NzNotificationService) { }

  //#region // notification

  showNotification(type, title, message) { 
    this.notification.create(type, title, message, {nzClass: 'lang-ar'});
  }

  //#endregion   

  //#region // date

  formatDate(date, type = '') {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1), 
        day = '' + d.getDate(),
        year = d.getFullYear();
      
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2) 
      day = '0' + day;
    
    if(type != '')
      return `${year}-${month}-${day}`;

    return `${day}/${month}/${year}`;
  }

  //#endregion  
}
