import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products:any[]=[];
  ngOnInit(): void {
    this.products=this.prodSrv.getProducts();
  }
  constructor(private prodSrv:ProductService){}

}
