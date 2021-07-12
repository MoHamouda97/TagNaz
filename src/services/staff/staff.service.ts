import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http: HttpClient) { }

  getLoansDetails(date) {    
    return this.http.post(`${environment.endpoint}/StaffPayments/getDailyStaffPaymentsDetailsByDate.json`, date)
  }

}
