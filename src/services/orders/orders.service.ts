import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  filterOrders(filterBy) {    
    return this.http.post(`${environment.endpoint}/orderdetails/sellallitems.json`, filterBy)
  }

}