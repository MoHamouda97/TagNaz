import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getOrderReport() : Observable<any> {    
    return this.http.get(`${environment.endpoint}/orders/getorderReport.json`)
      .pipe(
        shareReplay()
      )
  }

}
