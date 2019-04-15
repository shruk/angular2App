import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponnent } from './star.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';

@NgModule({
  /* Decalrations section decalre what component/pipe/directive belongs to current NgModule
  */
  declarations: [ 
    StarComponnent,
    ConvertToSpacesPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StarComponnent,
    CommonModule,
    FormsModule,
    ConvertToSpacesPipe
  ]
})
export class SharedModule { }
