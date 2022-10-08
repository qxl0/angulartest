import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  _promise: any;
  constructor(private svc: CustomerService) {
    console.log('inside constructor');
    this._promise = new Promise((res, reject) => {
      let condition = true;
      if (condition) {
        setTimeout(() => {
          res('Promise is resolved successfully.');
        }, 1000);
      } else {
        setTimeout(() => {
          reject('Promise is rejected!!!');
        }, 1000);
      }
    });

    // promise
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  ngOnInit(): void {
    this.svc.getProducts().subscribe((plist) => {
      console.log(plist);
    });
  }

  resolve() {
    this._promise.then((res) => {
      console.log(res);
    });
  }
}
