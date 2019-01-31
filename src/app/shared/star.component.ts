import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector:'star',
  templateUrl:'./star.component.html',
  styleUrls:['./star.component.css']
})
export class StarComponnent implements OnChanges
{
     starWidth:number;
    @Input() rating:number; //this value comes from container component


    constructor(){
          }

    ngOnChanges():void{

      this.starWidth=(this.rating*75/5);
    }
}
