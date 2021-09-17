import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductlistService } from 'src/app/services/productlist.service';
import { USERS } from 'src/assets/data/dataUser';
import { Product } from 'src/assets/models/Product';
import { User } from 'src/assets/models/User';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() ProductId!:number;

  @Output() updated = new EventEmitter<boolean>();

  products:Product[]=[];

  currentProduct!:Product;

  users = USERS;
  
  productOwner!:User;

  constructor(private data:ProductlistService) { }

  onLiked(){
    this.currentProduct.isLiked = !this.currentProduct.isLiked;
    if(this.currentProduct.isLiked)
      this.currentProduct.numberOfLikes++;
    else
      this.currentProduct.numberOfLikes--;
  }

  onAddToCart(){
    this.currentProduct.isInCart = !this.currentProduct.isInCart;
    this.updated.emit(true);
  }

  getProductById() {
    this.currentProduct = this.products.find(x=>x.id == this.ProductId)!;
    this.getProductOwner();
  }

  getProductOwner() {
    this.productOwner = this.users.find(x => x.id == this.currentProduct.userId)!;
  }

  ngOnInit(): void {
    this.products = this.data.getAllProduct();
    this.getProductById();
  }

}
