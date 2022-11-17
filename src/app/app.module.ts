import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputNumberModule } from "primeng/inputnumber";

@NgModule( {
               declarations: [
                   AppComponent
               ],
               imports: [
                   BrowserModule,
                   AppRoutingModule,
                   InputNumberModule,
                   ButtonModule
               ],
               providers   : [],
               bootstrap   : [ AppComponent ]
           } )
export class AppModule {
}
