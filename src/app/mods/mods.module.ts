import { NgModule } from '@angular/core';
import { ModsComponent } from '~app/mods/mods.component';
import { ModsRoutingModule } from './mods-routing.module';


@NgModule( {
               declarations: [
                   ModsComponent
               ],
               imports     : [
                   ModsRoutingModule
               ]

           } )
export class ModsModule {
}
