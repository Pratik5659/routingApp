import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product:any;


  // Add following line in constructor for Modal functionality
  // ,public dialogRef:MatDialogRef<ProductDetailComponent>,@Inject(MAT_DIALOG_DATA) public prod:any
  constructor(private route:ActivatedRoute,private prodSrv:ProductService){}

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const id=+params['id'];
      this.product=this.prodSrv.getProductByID(id);
    })
  }

  // onClose(){
  //   this.dialogRef.close();
  // }

}
