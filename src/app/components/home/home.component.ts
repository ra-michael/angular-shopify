import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/assets/data/dataProduct';
import * as Aos from 'aos';
import { Singleton } from 'src/assets/models/Singleton';
import { Product } from 'src/assets/models/Product';
import { ProductlistService } from 'src/app/services/productlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products:Product[] = [];
  
  constructor(private data:ProductlistService) { }

  ngOnInit(): void {
    Aos.init();
    this.products = this.data.getAllProduct();
  }

  updateCartBadge(){
    Singleton.numberOfProductInCart = this.products.filter(x => x.isInCart).length;
  }

}
