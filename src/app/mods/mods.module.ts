import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ModsComponent } from '~app/mods/mods.component';
import { ModMenuComponent } from './components/mod-menu/mod-menu.component';
import { ModComponent } from './components/mod/mod.component';
import { ModsRoutingModule } from './mods-routing.module';


@NgModule( {
               declarations: [
                   ModsComponent,
                   ModComponent,
                   ModMenuComponent
               ],
               imports     : [
                   ModsRoutingModule,
                   PanelMenuModule,
                   CommonModule,
                   ScrollPanelModule
               ]

           } )
export class ModsModule {
}
