import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  pName:string='';
  pPrize:number=0;
  pImage:File|null=null;

  constructor(private prodSrv:ProductService){}

  onImageSelected(event:any){
    this.pImage=event.target.files[0];
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
        this.pName='';
        this.pPrize=0;
        this.pImage=null;
      };
      reader.readAsDataURL(this.pImage);
    }
  }


}
