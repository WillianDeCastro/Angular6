import { Component, OnInit } from '@angular/core';
import { ICustomer } from './customer.model';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  myCustomers: ICustomer[]

  constructor(private myCustomerService: CustomerService) { }

  ngOnInit() {
    this.myCustomers = this.myCustomerService.GetAllCustomers();
  }

}
