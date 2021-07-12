import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExpensessService {

  constructor(private http: HttpClient) { }

  getExpensessDetails(date) {    
    return this.http.post(`${environment.endpoint}/Expenses/getDailyExpensesDetailsByDate.json`, date)
  }

}
