import { shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionssService {

  constructor(private http: HttpClient) { }

  getExpensessDetails() : Observable<any> {    
    return this.http.get(`${environment.endpoint}/Transactions/GetTrancsactionReportTotal.json`)
      .pipe(
        shareReplay()
      )
  }

  getTrancsactionByUsers() : Observable<any> {    
    return this.http.get(`${environment.endpoint}/Transactions/GetTrancsactionByUsers.json`)
      .pipe(
        shareReplay()
      )
  }

  getTrancsactions(page) : Observable<any> {    
    return this.http.get(`${environment.endpoint}/Transactions/index.json?page=${page}`)
      .pipe(
        shareReplay()
      )
  }

  filterTransactions(filter) {
    return this.http.post(`http://credit.codesroots.com/api/Transactions/index.json`, filter)
  }

}
