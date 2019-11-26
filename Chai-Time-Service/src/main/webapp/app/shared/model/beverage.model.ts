import { IOrder } from 'app/shared/model/order.model';

export interface IBeverage {
    id?: number;
    name?: string;
    price?: number;
    order?: IOrder;
}

export class Beverage implements IBeverage {
    constructor(public id?: number, public name?: string, public price?: number, public order?: IOrder) {}
}
