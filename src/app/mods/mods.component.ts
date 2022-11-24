import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AppR } from '~shared/config/constants/routes';
import { mods } from './mods';

@Component( {
                selector   : 'app-mods',
                templateUrl: './mods.component.html',
                styleUrls  : [ './mods.component.scss' ]
            } )
export class ModsComponent implements OnInit {

    mods = mods;
    items!: MenuItem[];

    constructor() {
    }

    ngOnInit() {
        this.items = mods.map( mod => {
            return {
                label     : mod.name,
                fragment  : mod.name,
                routerLink: AppR.mods.full
            };
        } );
    }

}
