import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RippleModule } from 'primeng/ripple';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ModsComponent } from '~app/mods/mods.component';
import { SharedModule } from '~shared/shared.module';
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
                   ScrollPanelModule,
                   ImageModule,
                   ButtonModule,
                   RippleModule,
                   SharedModule
               ]

           } )
export class ModsModule {
}
