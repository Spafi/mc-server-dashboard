import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';

@Component( {
                selector: 'app-root',
                template: `
                    <ng-particles
                        id="particles"
                        [url]="particlesUrl"
                        [particlesInit]="particlesInit"
                    >
                    </ng-particles>

                    <div class="flex h-full flex-column">

                        <header class="flex-initial">
                            <app-nav-bar></app-nav-bar>
                        </header>

                        <section class="flex-auto px-2">
                            <router-outlet></router-outlet>
                        </section>

                    </div>
                    <p-toast
                        [preventOpenDuplicates]="true"
                        position="bottom-left"
                        styleClass="text-gray-900"
                    ></p-toast>

                `, styles: [
        `
          :host ::ng-deep .p-toast .p-toast-message .p-toast-message-content {
            color: #121212;
          }
        `
    ]
            } )
export class AppComponent implements OnInit {

    particlesUrl = 'assets/particles-config/particles.json';

    constructor(
        private primengConfig: PrimeNGConfig
    ) {
    }

    ngOnInit() {
        this.primengConfig.ripple = true;
    }

    async particlesInit(engine: Engine): Promise<void> {
        await loadFull( engine );
    }
}
