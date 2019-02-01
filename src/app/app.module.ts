import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponnent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [//think declaration as more of relation between module and components etc.
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponnent,
    ProductDetailComponent,
    WelcomeComponent
  ],//imports external module
  imports: [ //imports as more of reference between modules
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([//routes configuration,first match wins
      {path: 'products', component:ProductListComponent},
      {path: 'products/:id', component:ProductDetailComponent},
      {path: 'welcome', component:WelcomeComponent},
      {path: '', component:WelcomeComponent,pathMatch:'full'},
      {path: '**', component:WelcomeComponent,pathMatch:'full'}

    ]),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
