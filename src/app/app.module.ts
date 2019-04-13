import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';
import { BioComponent } from './bio/bio.component';
import { BioModule } from './bio/bio.module';

@NgModule({
  declarations: [// Components,directives and pipes that belong to this NgModule
    AppComponent,
    WelcomeComponent
  ],
  exports:[], // Subset of declarations that visible and usable component templates of other NgModules.
  imports: [ //imports external Module, as more of reference between modules, these modules exported classes are needed by component templates declared in this NgModules.
    // Tell Angular what other NgModules the current module needs. Here are all NgModules
    BrowserModule,
    RouterModule.forRoot([//routes configuration,first match wins
      {path: 'welcome', component:WelcomeComponent},
      {path: '', component:WelcomeComponent,pathMatch:'full'},
      {path: '**', component:WelcomeComponent,pathMatch:'full'}
    ]),
    HttpClientModule,
    BioModule,
    ProductModule //this is our feature module
  ],
  providers: [],
  bootstrap: [AppComponent] // Identify root component, Angular will insert into index.html host web page.
})
export class AppModule { }
