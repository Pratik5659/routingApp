import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  pName:string='';
  pPrize:number=0;
  pImage:File|null=null;

  constructor(private prodSrv:ProductService,private snackBar:MatSnackBar){}

  onImageSelected(event:any){
    if(event.target.files && event.target.files.length > 0){
      this.pImage=event.target.files[0];
    }
  }

  addProduct(){
    if(this.pName && this.pPrize && this.pImage){
      const reader=new FileReader();
      reader.onload=()=>{
        const imageDataURL=reader.result as string;
        this.prodSrv.addProduct({
          id:Date.now(),
          name:this.pName,
          prize:this.pPrize,
          image:imageDataURL
        });
        this.snackBar.open('Product Added Successfully','Close',{
          duration:3000,
          horizontalPosition:'center',
          verticalPosition:'top',
        });
        this.pName='';
        this.pPrize=0;
        this.pImage=null;
      };
      reader.readAsDataURL(this.pImage);
    }else{
      this.snackBar.open('Please fill out all fields','Close',{
        duration:3000,
        horizontalPosition:'center',
        verticalPosition:'top',
      });
    }
  }


}
