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
}
