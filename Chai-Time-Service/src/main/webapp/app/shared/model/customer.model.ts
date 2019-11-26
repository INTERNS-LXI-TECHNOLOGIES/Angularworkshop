import { IOrder } from 'app/shared/model/order.model';

export interface ICustomer {
    id?: number;
    name?: string;
    password?: string;
    order?: IOrder;
}

export class Customer implements ICustomer {
    constructor(public id?: number, public name?: string, public password?: string, public order?: IOrder) {}
}
