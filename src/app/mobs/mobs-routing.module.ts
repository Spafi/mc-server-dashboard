import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobsComponent } from '~mobs/mobs.component';

const routes: Routes = [
    {
        path     : '',
        component: MobsComponent
    }
];

@NgModule( {
               imports: [ RouterModule.forChild( routes ) ],
               exports: [ RouterModule ]
           } )
export class MobsRoutingModule {
}
