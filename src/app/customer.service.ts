import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatMap, map, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { IProduct } from './customer';
/*
There are 8 resources available for you:

100 products https://dummyjson.com/products/
20 carts https://dummyjson.com/carts/
100 users https://dummyjson.com/users/
150 posts https://dummyjson.com/posts/
340 comments https://dummyjson.com/comments/
100 quotes https://dummyjson.com/quotes/
150 todos https://dummyjson.com/todos/
auth https://dummyjson.com/auth/
*/
@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private httpSvc: HttpClient) {}
  getProducts(): Observable<IProduct[]> {
    return this.httpSvc
      .get<any>('https://dummyjson.com/products')
      .pipe(map((p) => p.products));
  }
}
