import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [//think declaration as more of relation between module and components etc.
    AppComponent,
    WelcomeComponent
  ],//imports external module
  imports: [ //imports as more of reference between modules
    BrowserModule,
    RouterModule.forRoot([//routes configuration,first match wins
      {path: 'welcome', component:WelcomeComponent},
      {path: '', component:WelcomeComponent,pathMatch:'full'},
      {path: '**', component:WelcomeComponent,pathMatch:'full'}
    ]),
    HttpClientModule,
    ProductModule //this is our feature module
  ],
  providers: [],
  bootstrap: [AppComponent] //identify root module
})
export class AppModule { }
