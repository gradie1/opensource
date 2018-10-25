import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  {path:'',component:HomeComponent},
  {path:'**',component:PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    
    //Routes configuration
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:true}
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
