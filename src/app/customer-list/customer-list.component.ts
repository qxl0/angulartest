import { Component, Input, OnInit } from '@angular/core';
import { ICustomer } from '../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
  @Input() customerlist: ICustomer[] = [];
  coll: ICustomer[];
  constructor() {}

  ngOnInit(): void {
    this.coll = this.customerlist;
  }

  onChanged($event) {
    let filterBy = $event.target.value.toLowerCase();
    this.coll = this.customerlist.filter(
      (customer) => customer.CustomerName.toLowerCase().indexOf(filterBy) != -1
    );
    console.log('text changed');
  }
}
