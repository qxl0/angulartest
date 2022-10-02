import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { ICustomer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit, OnChanges {
  @Input() customerlist: ICustomer[] = [];
  coll: ICustomer[];
  private subject: Subject<string> = new Subject();
  searchText: string;
  constructor(customerService: CustomerService) {}

  ngOnInit(): void {
    this.coll = this.customerlist;
    this.subject.pipe(debounceTime(500)).subscribe((searchText) => {
      this.searchText = searchText;
      this.handlefilter(searchText);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  handlefilter(filterBy) {
    this.coll = this.customerlist.filter(
      (customer) => customer.CustomerName.toLowerCase().indexOf(filterBy) != -1
    );
  }

  onChanged($event) {
    this.subject.next($event.target.value);
  }
}
