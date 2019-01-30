export interface IProduct{
    productId:number;
    productName:string;
    productCode:string;
    releaseDate:string;//change to date
    price:number;
    description:string;
    starRating:number;
    imageUrl:string;
}

//methods may need in future
export class Product implements IProduct{
    constructor(public productId:number,
        public productName:string,
        public productCode:string,
        public releaseDate:string,//change to date
        public price:number,
        public description:string,
        public starRating:number,
        public imageUrl:string){
            //empty constructor
        }

        calculateDiscount(percent:number):number{
            return this.price-(this.price*percent/100);
        }


}