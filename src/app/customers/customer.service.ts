import { ICustomer } from "./customer.model";


export class CustomerService {

    myCustomers: ICustomer[] = [
        { Id: 1, Name: "Cust1" },
        { Id: 2, Name: "Cust2" },
        { Id: 3, Name: "Cust3" },
        { Id: 4, Name: "Cust4" },
        { Id: 5, Name: "Cust5" }
    ]

    GetAllCustomers(): ICustomer[] {
        return this.myCustomers;
    }

}