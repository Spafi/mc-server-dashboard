import { Component } from '@angular/core';

@Component( {
                selector: 'app-landing',
                template: `
                    <div class="grid">

                        <!--    START Left Column (Title / Galleria)-->
                        <div class="col-12 md:col-6 lg:col-9 flex align-items-center flex-column">

                            <h1 class="minecraft-font text-6xl lg:text-8xl py-0 my-0 gradient-text spaced-letters">
                                Panaritiu
                            </h1>

                            <app-galleria></app-galleria>
                        </div>
                        <!--    END Left Column-->

                        <!--    START Right Column (Server Info / Discord)-->
                        <div class="col-12 md:col-6 lg:col-3 flex flex-column gap-2">
                            <app-server-info></app-server-info>
                            <app-discord></app-discord>
                        </div>
                        <!--    END Right Column-->
                    </div>
                `,
                styles  : [
                    `
                      :host ::ng-deep .p-card .p-card-content {
                        padding: 0
                      }

                      .spaced-letters {
                        letter-spacing: .5rem;
                      }
                    `
                ]
            } )
export class LandingComponent {
}
