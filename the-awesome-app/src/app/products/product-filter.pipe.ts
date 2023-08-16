import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/Product';

// <tr *ngFor="let item of data | productFilter : searchKey

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(input: Array<Product>, searchKey: string): Array<Product> {

    if(!searchKey){
        return input;
    }
    else{

        return input.filter(function(product, index){
            //return true/false
            return product.id?.toString() === searchKey 
                                || product.name?.toLowerCase().includes(searchKey.toLowerCase())
                                || product.description?.toLowerCase().includes(searchKey.toLowerCase())
                                || product.price?.toString() === searchKey

        })
    }

    
  }

}
