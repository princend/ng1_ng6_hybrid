import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { ChildComponent } from './child/child.component';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  declarations: [
    OrdersComponent,
    ChildComponent
  ]
})
export class OrdersModule { }
