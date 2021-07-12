import { GenericService } from './../generic/generic.service';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import * as lang from './../../settings/lang';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  lang: any = lang.ar;

  constructor(private http: HttpClient, private generic: GenericService) { }

  login(obj) {
    return this.http.post(`${environment.endpoint}/users/token.json`, obj)
      .pipe(
        tap(
          res => this.generic.showNotification('success', this.lang.loginTitleTxt ,this.lang.loginSuccessTxt),
          err => this.generic.showNotification('error', this.lang.loginTitleTxt , `${this.lang.loginFailTxt} \n ${err.message}`)
        )
      )
  }

}
