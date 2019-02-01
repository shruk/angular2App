import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
selector:'app-products',
templateUrl:'./product-list.component.html',
styleUrls:['./product-list.component.css']
})
export class ProductListComponent
                implements OnInit{
    pageTitle:string='Product List';
    imageWidth:number=50;
    imageMargin:number=2;
    showImage:boolean=false;
    errorMessage:string;
    //update listFilter to a getter/setter
    //two way binding will use getter and setter automatically
    //so the best way is to use logic in setter to change value
    _listFilter:string;
    get listFilter():string{
        return this._listFilter;
    }

    set listFilter(value:string){
        this._listFilter=value;
        this.filteredProducts=this.listFilter?this.filtering(this.listFilter):this.products;
    }

    filteredProducts:IProduct[];

    filtering(filter:string):IProduct[]{
        filter=filter.toLocaleLowerCase();
return this.products.filter((product:IProduct)=>
    product.productName.toLocaleLowerCase().indexOf(filter)!=-1);

    }
//need to populate some product infomation.
products:IProduct[]=[];

//inject service instance to component in constructor
constructor(private productService:ProductService){

}
  //triggered from component view.
    toggleImage():void{
        this.showImage=!this.showImage;
    }
//lifecycle hooks interface imple
    ngOnInit():void{
        this.productService.getProducts()
        .subscribe(
          products=>{
            this.products=products;
            this.filteredProducts=this.products;
          },
          error=>this.errorMessage=<any>error
        );


    }

    onNotify(message:string):void{
      this.pageTitle=this.pageTitle +' '+ message;
    }
}
