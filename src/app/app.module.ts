import { HttpClientModule } from '@angular/common/http';
import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgParticlesModule } from 'ng-particles';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { metaReducers, reducers } from '~app/store';
import { setServiceInjector } from '~config/bootstrap/service-injector.function';
import { LandingEffects } from '~landing/state/landing.effects';
import { SharedModule } from '~shared/shared.module';
import { CoreEffects } from '~store/core.effects';
import { environment } from '../environments/environment';
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
                   SharedModule,
                   ToastModule,
                   StoreModule.forRoot( reducers, { metaReducers } ),
                   StoreDevtoolsModule.instrument( { maxAge: 25, logOnly: environment.production } ),
                   EffectsModule.forRoot( [
                                              CoreEffects,
                                              LandingEffects
                                          ] )

               ],
               providers   : [ MessageService ],
               exports     : [],
               bootstrap   : [ AppComponent ]
           } )
export class AppModule {
    constructor(injector: Injector) {
        setServiceInjector( injector );
    }
}
