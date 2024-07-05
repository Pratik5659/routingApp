import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

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
  constructor(private prodSrv:ProductService,public dialog:MatDialog){}

  // This is also for Modal
  viewDetails(pId:number){
    const product=this.prodSrv.getProductByID(pId);
    if(product){
      this.dialog.open(ProductDetailComponent,{
        width:'60vh',
        height:'auto',
        data:product,
        disableClose:true
      });
    }
  }

}
