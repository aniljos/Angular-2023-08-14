import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from './product-filter.pipe';
import {RouterModule, Routes} from '@angular/router';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AuthGuardFn, AuthGuardService } from '../services/auth-guard.service';

const routes: Routes = [
  {path: "products", component: ListProductsComponent, canActivate: [AuthGuardFn]},
  {path: "products/:id", component: EditProductComponent, canActivate: [AuthGuardService]}
]

@NgModule({
  declarations: [
    ListProductsComponent,
    ProductFilterPipe,
    EditProductComponent
  ],
  imports: [
    CommonModule, HttpClientModule, FormsModule, RouterModule.forChild(routes)
  ],
  exports: []
})
export class ProductsModule { }
