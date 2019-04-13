import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioComponent } from './bio.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"Bio",component:BioComponent}
      ])
  ]
})
export class BioModule { }
