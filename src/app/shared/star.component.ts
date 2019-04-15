import { Component, OnChanges, Input, Output,EventEmitter } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector:'star',
  templateUrl:'./star.component.html',
  styleUrls:['./star.component.css']
})
export class StarComponnent implements OnChanges
{
     starWidth:number;
    @Input() rating:number; //this value comes from container/parent component

    //output describe event raised to container
    @Output() notify: EventEmitter<string>
    =new EventEmitter<string>();

    ngOnChanges():void
    {
      this.starWidth=(this.rating*75/5);
    }

    onClick():void
    {
      this.notify.emit(`The rating ${this.rating} was clicked!`);
    }
}
