import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenubarModule } from 'primeng/menubar';
import { NavBarComponent } from '~shared/components/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule( {
               declarations: [
                   AppComponent,
                   NavBarComponent
               ],
               imports     : [
                   BrowserModule.withServerTransition( { appId: 'serverApp' } ),
                   AppRoutingModule,
                   HttpClientModule,
                   MenubarModule
               ],
               providers   : [],
               bootstrap   : [ AppComponent ]
           } )
export class AppModule {
}
