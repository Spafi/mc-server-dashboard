import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ServerService } from '~landing/services/server.service';
import { MobsRoutingModule } from '~mobs/mobs-routing.module';
import { SharedModule } from '~shared/shared.module';
import { MobsComponent } from './mobs.component';


@NgModule( {
               declarations: [
                   MobsComponent
               ],
               imports     : [
                   MobsRoutingModule,
                   CommonModule,
                   TableModule,
                   SharedModule,
                   AvatarModule,
                   InputTextModule,
                   FormsModule,
                   ReactiveFormsModule
               ], providers: [ ServerService, MessageService ]
           } )
export class MobsModule {
}
