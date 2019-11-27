/* tslint:disable */
import { Beverage } from './beverage';
import { Seller } from './seller';
export interface Order {
  beverages?: Array<Beverage>;
  date?: string;
  id?: number;
  idpcode?: string;
  seller?: Seller;
  total?: number;
}
