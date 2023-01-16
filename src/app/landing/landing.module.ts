import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DockModule } from 'primeng/dock';
import { GalleriaModule } from 'primeng/galleria';
import { InputNumberModule } from 'primeng/inputnumber';
import { MenubarModule } from 'primeng/menubar';
import { LandingComponent } from '~landing/landing.component';
import { SharedModule } from '~shared/shared.module';
import { DiscordComponent } from './components/discord/discord.component';
import { GalleriaComponent } from './components/galleria/galleria.component';
import { ServerInfoComponent } from './components/server-info/server-info.component';
import { LandingRoutingModule } from './landing-routing.module';


@NgModule( {
               declarations: [
                   LandingComponent,
                   ServerInfoComponent,
                   DiscordComponent,
                   GalleriaComponent
               ],
               imports     : [
                   LandingRoutingModule,
                   InputNumberModule,
                   ButtonModule,
                   DockModule,
                   MenubarModule,
                   CardModule,
                   CommonModule,
                   AvatarModule,
                   GalleriaModule,
                   SharedModule
               ],
               providers   : []
           } )
export class LandingModule {
}
