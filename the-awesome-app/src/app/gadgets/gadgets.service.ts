import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/Product';
import { BehaviorSubject, Observable, Subject, firstValueFrom } from 'rxjs';
import { CartItem } from '../model/CartItem';
import { environment } from '../../environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class GadgetsService {

  private url: string;
  private cart: Array<CartItem> = [];

  //Represents the cart and notifies when the cart changes with updated cart.
  //public subject: Subject<Array<CartItem>> = new Subject(); 
  public subject: BehaviorSubject<Array<CartItem>> = new BehaviorSubject<Array<CartItem>>([]); 


  constructor(private httpClient: HttpClient) { 
    //this.url = "http://localhost:9000/products";
    this.url = environment.productsUrl;
  }

  getVersion(){
    return "Gadget Service 1.0";
  }

  getProductsWithCallbacks(successCallback?: (data: Array<Product>)=>void, 
                                                errorCallback?: (resp: any)=> void): void{

        this.httpClient
                .get<Array<Product>>(this.url)
                .subscribe({
                  next: (data) => {
                    if(successCallback){
                      successCallback(data);
                    }
                    
                  },
                  error: (resp) => {
                    if(errorCallback){
                      errorCallback(resp);
                    }
                  }
                })
                          
  }


  getProductsWithPromise(): Promise<Array<Product>>{

     return firstValueFrom(this.httpClient.get<Array<Product>>(this.url));

  }

  getProducts(): Observable<Array<Product>>{
    return this.httpClient.get<Array<Product>>(this.url);
  }

  addToCart(cartItem: CartItem): void{
    this.cart.push(cartItem);

    //raise a notification(publish)
    this.subject.next(this.cart);
  }

  getCart(): Array<CartItem>{

    //return a copy of the cart
    return [...this.cart];
  }
}
