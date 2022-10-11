import { Component, OnInit } from '@angular/core';
import {
  catchError,
  filter,
  map,
  Observable,
  of,
  Subject,
  switchMap,
  tap,
} from 'rxjs';
import { IProduct } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  _promise: any;
  _condition: boolean = true;
  _obs: any;
  products$: Observable<IProduct[]>;
  products2$: Observable<IProduct[]>;
  products: IProduct[];
  productnames$: Observable<string[]>;
  private categorySubject = new Subject<string>();
  categorySelectedAction$ = this.categorySubject.asObservable();
  categories: string[];

  selectedCategory: string;
  constructor(private svc: CustomerService) {
    console.log('inside constructor');
    this.products$ = this.svc.getProducts();
    this.products$.subscribe((res) => {
      console.log('here');
      //
      this.products = res;
      this.categories = ['all categories'];
      for (let i = 0; i < res.length; i++) {
        if (!this.categories.includes(res[i].category))
          this.categories.push(res[i].category);
      }
    });

    this.productnames$ = this.products$.pipe(
      map((products) => products.map((product) => product.title))
    );

    this.products2$ = this.categorySelectedAction$.pipe(
      switchMap((category) => {
        console.log(category);
        if (category == 'all categories') {
          console.log('all category');
          return of(this.products);
        }
        let pl = this.products.filter((p) => p.category == category);
        return of(pl);
      })
    );
  }

  ngOnInit(): void {}

  selectedCategoryChanged(category): void {
    this.categorySubject.next(category);
  }

  handleError(err) {
    console.log(err);
  }
  resolve() {
    this._condition = true;
    this._promise
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    this._obs
      .pipe(
        map((val: number) => val * val),
        filter((data: number) => data > 5)
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
  reject() {
    this._condition = false;
    this._promise
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
