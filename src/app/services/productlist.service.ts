import { Injectable } from '@angular/core';
import { PRODUCTS } from 'src/assets/data/dataProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {

  products = PRODUCTS;

  constructor() { }

  getAllProduct(){
    return this.products;
  }
}
