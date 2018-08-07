import { ICustomer } from "./customer.model";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CustomerService {


    constructor(private meuHttp: HttpClient) { }

    myCustomers: ICustomer[] = []

    GetAllCustomers() {
        return this.meuHttp.get("http://localhost:50406/api/customer");
    }

}