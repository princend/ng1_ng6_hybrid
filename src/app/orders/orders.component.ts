import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('aaa')
  }

}
