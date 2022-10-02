import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
// AfterViewInit,
// AfterViewChecked
// , AfterContentInit, AfterContentChecked
export class AppComponent implements OnInit, OnDestroy {
  title = 'test1';
  coll = [
    {
      CustomerName: 'John Smith',
      age: 23,
      id: 1,
      date: '01-10-2022',
      totalSpent: 3000,
    },
    {
      CustomerName: 'Qiang Li',
      age: 53,
      id: 2,
      date: '11-10-2012',
      totalSpent: 6000,
    },
    {
      CustomerName: 'Leo Li',
      age: 18,
      id: 3,
      date: '01-10-2012',
      totalSpent: 7000,
    },
  ];
  hide: boolean = true;
  color: string = 'blue';
  imageUrl: string = `https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg`;
  imageUrl2: string = `https://images.freeimages.com/variants/wJdG4pYDgnLaJo9m7wy61VPt/b6679d1569eb20491ea73c07cf4bfc2406d426757005363d05f4184a67cad3c1`;
  productsurl: string = '/products';
  Hide() {
    this.hide = !this.hide;
    return this.hide;
  }
  ChangeColor() {
    if (this.color == 'blue') this.color = 'red';
    else this.color = 'blue';
  }
  showImage: boolean = true;
  toggleImage() {
    this.showImage = !this.showImage;
  }
  constructor() {
    let lst = ['di', 'boo', 'punkeye'];
    let item;

    for (item in lst) {
      console.log(item);
    }
    for (item of lst) {
      console.log(item);
    }
  }
  // ngAfterViewChecked(): void {
  //   console.log('ngAftgerViewChecked');
  // }
  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit');
  // }
  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked');
  // }
  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit');
  // }
  ngOnInit(): void {
    console.log('ngOnInit');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
