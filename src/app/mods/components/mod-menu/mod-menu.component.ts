import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { mods } from '~mods/mods';
import { AppR } from '~shared/config/constants/routes';

@Component( {
                selector   : 'app-mod-menu',
                templateUrl: './mod-menu.component.html',
                styleUrls  : [ './mod-menu.component.scss' ]
            } )
export class ModMenuComponent implements OnInit {
    items!: MenuItem[];

    constructor(private readonly router: Router) {
    }

    ngOnInit() {
        this.items = mods.map( mod => {
            return {
                label                  : mod.name,
                fragment               : mod.name,
                routerLink             : AppR.mods.full,
                expanded               : this.checkActiveState( mod.name ),
                routerLinkActiveOptions: { exact: true }
            };
        } );
    }

    // FIXME: Not displaying active element
    checkActiveState(activeItem: string) {
        const urlFragment = this.router.parseUrl( this.router.url ).fragment;
        return urlFragment == activeItem;
    }
}
