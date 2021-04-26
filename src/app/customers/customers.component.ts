import { Component, OnInit } from '@angular/core';

import { CUSTOMERS } from './customers.mock';
import { Customer } from './customers.model'

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = CUSTOMERS;
  pag: Number = 1;
  contador: Number = 5;

  constructor() { }

  ngOnInit(): void {
  }

}
