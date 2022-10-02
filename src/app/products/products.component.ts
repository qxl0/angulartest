import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private svc: CustomerService) {}

  ngOnInit(): void {
    this.svc.getProducts().subscribe((plist) => {
      console.log(plist);
    });
  }
}
