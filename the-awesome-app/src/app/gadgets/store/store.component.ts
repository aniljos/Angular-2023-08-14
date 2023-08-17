import { Component } from '@angular/core';
import { GadgetsService } from '../gadgets.service';
import { Product } from '../../model/Product';
import { CartItem } from 'src/app/model/CartItem';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  products: Array<Product> = [];

  constructor(private gadgetsService: GadgetsService){
    console.log(gadgetsService.getVersion());
    //this.invokeCallbackImpl()
    //this.invokePromiseImpl();
    //this.invokePromiseWithAwaitImpl();

    this.gadgetsService
              .getProducts()
              .subscribe({
                next: (data)=> {
                  this.products = data;
                }
              })
  }

  invokeCallbackImpl(){

      this.gadgetsService.getProductsWithCallbacks((data) => {
        console.log("success callback", data)
      }, (error) => {
        console.log("error callback", error)
      })
  }

  invokePromiseImpl(){

    this.gadgetsService
          .getProductsWithPromise()
          .then((data) => {
            console.log("fulfilled promise", data)
          })
          .catch(error => {
            console.log("rejected promise", error);
          }) 
  }

  async invokePromiseWithAwaitImpl(){

    try {
      
      const data = await this.gadgetsService.getProductsWithPromise();
      console.log("fulfilled promise awaited", data)

    } catch (error) {
      console.log("rejected promise catch", error);
    }

  }

  add(item:Product, quantity: string){
    this.gadgetsService.addToCart(new CartItem(item, Number(quantity)));
  }
}
