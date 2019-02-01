import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { IProduct } from './product';
import { Observable, throwError } from 'rxjs';
import {catchError,tap} from 'rxjs/operators';

@Injectable({
  providedIn:'root'
})
export class ProductService
{
  private productUrl='api/products/products.json';
//inject HttpClient service
  constructor(private http:HttpClient){}

   getProducts():Observable<IProduct[]>{
     //automatically map the result to IProduct[]
     return this.http.get<IProduct[]>(this.productUrl).pipe(
       tap(data=>console.log('ALL:'+JSON.stringify(data))),
       catchError(this.handleError)
     );

   }

private handleError(err:HttpErrorResponse){
  // in a real world app, we may send the server to some remote logging infrastructure
  // instaed of just logging it to the console
  let errorMessage='';
  if(err.error instanceof ErrorEvent)  {
    //A client-side or network error occurred. Handle it accordingly.
    errorMessage=`An error occurred: $(err.error.message)`;
  } else {
    //The backend returned an unsuccessful response code
    //The response body may contain clues as to what went wrong,
    errorMessage = `Server returned code: $(err.status),error message is: $(err.message)`;
  }
 console.error(errorMessage);
  return throwError(errorMessage);
}

}
