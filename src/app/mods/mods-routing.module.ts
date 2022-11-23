import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModsComponent } from '~app/mods/mods.component';

const routes: Routes = [
    {
        path     : '',
        component: ModsComponent
    }
];

@NgModule( {
               imports: [ RouterModule.forChild( routes ) ],
               exports: [ RouterModule ]
           } )
export class ModsRoutingModule {
}
