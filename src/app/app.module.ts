import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgParticlesModule } from 'ng-particles';
import { SharedModule } from '~shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule( {
               declarations: [
                   AppComponent
               ],
               imports     : [
                   BrowserModule,
                   AppRoutingModule,
                   HttpClientModule,
                   NgParticlesModule,
                   BrowserAnimationsModule,
                   SharedModule
               ],
               providers   : [],
               exports     : [],
               bootstrap   : [ AppComponent ]
           } )
export class AppModule {
}
