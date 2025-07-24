// src/types/CartItem.ts
import { IProduct } from '../service/productService';

export interface CartItem extends IProduct {
  quantidade: number;
}
