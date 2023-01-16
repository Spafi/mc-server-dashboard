import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { ButtonComponent } from '~shared/components/buttons/button/button.component';
import { NavBarComponent } from '~shared/components/nav-bar/nav-bar.component';


@NgModule( {
               declarations: [
                   ButtonComponent,
                   NavBarComponent
               ],
               exports     : [
                   ButtonComponent,
                   NavBarComponent
               ],
               imports     : [
                   CommonModule,
                   ButtonModule,
                   RippleModule,
                   MenubarModule
               ]
           } )
export class SharedModule {
}
