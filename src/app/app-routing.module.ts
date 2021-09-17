import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductFavoriteComponent } from './components/product-favorite/product-favorite.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'product-detail/:id', component:ProductDetailComponent },
  { path: 'product-favorite', component:ProductFavoriteComponent },
  { path: 'cart', component:CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
