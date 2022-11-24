import { Component, Input, OnInit } from '@angular/core';
import { Mod } from '~mods/mods';

@Component( {
                selector   : 'app-mod[mod]',
                templateUrl: './mod.component.html',
                styleUrls  : [ './mod.component.scss' ]
            } )
export class ModComponent implements OnInit {

    @Input() mod!: Mod;

    constructor() {
    }

    ngOnInit(): void {
    }

}
