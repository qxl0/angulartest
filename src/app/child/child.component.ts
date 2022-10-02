import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() myvalue: string = '';
  sales: number = 1300.345;
  today: Date = new Date();
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.today = new Date();
    }, 1000);
  }
  setValue() {
    this.myvalue = 'Nancy';
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
