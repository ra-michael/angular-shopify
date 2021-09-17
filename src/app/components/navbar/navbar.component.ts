import { Component, OnInit } from '@angular/core';
import { ProductlistService } from 'src/app/services/productlist.service';
import { Product } from 'src/assets/models/Product';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  nbProductInCart:number=0;

  nbProductFavorite:number=0;

  products:Product[]= [];

  constructor(private data:ProductlistService) { }

  ngOnInit(): void {
    this.products = this.data.getAllProduct();
    this.nbProductInCart = this.products.filter(x => x.isInCart).length;
    this.nbProductFavorite = this.products.filter(x => x.isLiked).length;
  }

}
