import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';

const customerRoutes: Routes = [
    {
        path: '',
        component: CustomersComponent
    }, {
        path: 'new',
        component: NewCustomerComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(customerRoutes)
    ],
    exports: [RouterModule]
})
export class CustomerRoutingModule {}