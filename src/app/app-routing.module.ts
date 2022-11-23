import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppR } from '~shared/config/constants/routes';

const routes: Routes = [
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: AppR.landing.full
    },
    {
        path        : AppR.landing.simple,
        loadChildren: () => import('~landing/landing.module').then( m => m.LandingModule )
    },
    {
        path        : AppR.mods.simple,
        loadChildren: () => import('~mods/mods.module').then( m => m.ModsModule )
    }
];

@NgModule( {
               imports: [
                   RouterModule.forRoot( routes, {
                       initialNavigation: 'enabledBlocking'
                   } )
               ],
               exports: [ RouterModule ]
           } )
export class AppRoutingModule {
}
