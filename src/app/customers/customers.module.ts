import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './costumer-routing.module';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    NewCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild(),
  ]
})
export class CustomersModule { }
