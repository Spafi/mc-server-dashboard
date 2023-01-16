import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AppR } from '~shared/config/constants/routes';
import { mods } from './mods';

@Component( {
                selector: 'app-mods',
                template: `
                    <div class="grid">
                        <!--    START Left Column (Download / Mods Menu List)-->
                        <div class="col-3 fixed h-full pb-8">

                            <div class="mb-4 w-full max-w-24rem pr-2">
                                <app-button
                                    styleClass="w-full"
                                    icon="bi bi-file-earmark-arrow-down text-gray-900"
                                    label="Download mods archive"
                                >
                                </app-button>
                            </div>
                            <app-mod-menu></app-mod-menu>
                        </div>
                        <!--    END Left Column-->

                        <!--    START Right Column (Mods List)-->
                        <div class="col-offset-3 col-9 lg:pr-8">
                            <app-mod
                                *ngFor="let mod of mods"
                                [mod]="mod"
                            >
                            </app-mod>
                        </div>
                        <!--    End Right List-->
                    </div>
                `,
                styles  : [
                    `
                      :host ::ng-deep .p-button-label {
                        color: #121212;
                      }
                    `
                ]
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
