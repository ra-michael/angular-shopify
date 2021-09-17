import { Component, OnInit } from '@angular/core';
import { ProductlistService } from 'src/app/services/productlist.service';
import { Product } from 'src/assets/models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products:Product[] = [];

  res:number = 5000;

  constructor(private data:ProductlistService) { }

  ngOnInit(): void {
    this.products = this.data.getAllProduct().filter(x=>x.isInCart);
    this.products.forEach(x => {
      this.res += x.price;
    })
  }

}
