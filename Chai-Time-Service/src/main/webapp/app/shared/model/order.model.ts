import { Moment } from 'moment';
import { ISeller } from 'app/shared/model/seller.model';
import { IBeverage } from 'app/shared/model/beverage.model';

export interface IOrder {
    id?: number;
    idpcode?: string;
    date?: Moment;
    total?: number;
    seller?: ISeller;
    beverages?: IBeverage[];
}

export class Order implements IOrder {
    constructor(
        public id?: number,
        public idpcode?: string,
        public date?: Moment,
        public total?: number,
        public seller?: ISeller,
        public beverages?: IBeverage[]
    ) {}
}
