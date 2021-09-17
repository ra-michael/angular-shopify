import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductlistService } from 'src/app/services/productlist.service';
import { Product } from 'src/assets/models/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  products:Product[] = [];

  currentProduct!:Product;
  
  productId!:number;

  constructor(private route:ActivatedRoute,private data:ProductlistService) { }

  getProductById() {
    this.currentProduct = this.products.find(x => x.id == this.productId)!;
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params.id;
    this.products = this.data.getAllProduct();
    this.getProductById();
  }

  addToCart(){
    this.currentProduct.isInCart = true;
  }

}
