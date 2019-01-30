import { Component } from '@angular/core';

@Component({
selector:'app-products',
templateUrl:'./product-list.component.html'
})
export class ProductListComponent{
    pageTitle:string='Product List';
    imageWidth:number=50;
    imageMargin:number=2;
    showImage:boolean=false;
    listFilter:string='cart';
//need to populate some product infomation.
products:any[]=[
    {"productId":1,
    "productName":"Garden Cart",
    "productCode":"GDN-0023",
    "releaseDate":"March 18, 2016",
    "description":"15 gallon capacity rolling garden",
    "price":32.99,
    "starRating":4.2,
    "imageUrl":"https://openclipart.org/image/300px/svg"
    },
    {"productId":2,
    "productName":"Hammer",
    "productCode":"TBX-0048",
    "releaseDate":"May 21, 2016",
    "description":"Curved claw steel hammer",
    "price":8.9,
    "starRating":4.8,
    "imageUrl":"https://openclipart.org/image/300px/svg"
    }
    ];
    toggleImage():void{
        this.showImage=!this.showImage;
    }
}