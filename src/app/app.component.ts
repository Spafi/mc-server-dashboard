import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component( {
                selector: 'app-root',
                template: `
                    <div class="flex h-full flex-column">

                        <header class="flex-initial">
                            <app-nav-bar></app-nav-bar>
                        </header>

                        <section class="flex-auto px-2">
                            <router-outlet></router-outlet>
                        </section>

                    </div>
                `
            } )
export class AppComponent implements OnInit {

    constructor(
        private primengConfig: PrimeNGConfig
    ) {
    }

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
