import { Component, OnInit } from '@angular/core';
import { ProductlistService } from 'src/app/services/productlist.service';
import { Product } from 'src/assets/models/Product';
import { Singleton } from 'src/assets/models/Singleton';
import * as Aos from 'aos'

@Component({
  selector: 'app-product-favorite',
  templateUrl: './product-favorite.component.html',
  styleUrls: ['./product-favorite.component.scss']
})
export class ProductFavoriteComponent implements OnInit {

  products:Product[] = [];
  products_show:Product[] = [];

  constructor(private data:ProductlistService) { }

  ngOnInit(): void {
    Aos.init();
    this.products = this.data.getAllProduct();
    this.products_show = this.products.filter(x => x.isLiked);
  }

  updateCartBadge(){
    Singleton.numberOfProductInCart = this.products.filter(x => x.isInCart).length;
  }

}
