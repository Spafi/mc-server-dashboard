import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppR } from '~shared/config/constants/routes';

const routerOptions: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    anchorScrolling          : 'enabled',
    scrollOffset             : [ 0, 64 ]
};

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
        path        : AppR.mobs.simple,
        loadChildren: () => import('~mobs/mobs.module').then( m => m.MobsModule )
    },
    {
        path        : AppR.mods.simple,
        loadChildren: () => import('~mods/mods.module').then( m => m.ModsModule )
    },
    {
        path        : AppR.rcon.simple,
        loadChildren: () => import('~rcon/rcon.module').then( m => m.RconModule )
    }
];

@NgModule( {
               imports: [
                   RouterModule.forRoot( routes, routerOptions )
               ],
               exports: [ RouterModule ]
           } )
export class AppRoutingModule {
}
