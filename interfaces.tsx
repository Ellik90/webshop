import { CartItem } from "./data";
import { Customer } from "././src/contexts/CustomerContext";

export interface Order {
  orderNr: string;
  customer: Customer;
  cart: CartItem[];
  totalPrice: number;
}