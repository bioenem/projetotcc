import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { EcologiaComponent } from './ecologia/ecologia.component';

const routes: Routes = [
  { path: 'ecologia', component: EcologiaComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    EcologiaComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent], 
  exports: [RouterModule] 
})
export class AppModule { }
