import { Injectable } from '@angular/core';
interface Product{
  id:number;
  name:string;
  prize:number;
  image:string;
}
@Injectable({
  providedIn: 'root'
})


export class ProductService {

  private products:Product[]=[];

  addProduct(product:Product){
    this.products.push(product);
  }

  getProducts():Product[]{
    return this.products;
  }

  getProductByID(id:number):Product|undefined{
    return this.products.find(product=>product.id===id);
  }

  constructor() { }
}
