import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AppR } from '~shared/config/constants/routes';

@Component( {
                selector: 'app-nav-bar',
                template: `
                    <div class="h-5rem">
                        <p-menubar [model]="items" styleClass="h-4rem fixed w-full z-5">

                            <!--    START LOGO & NAME-->
                            <ng-template pTemplate="start">

                                <a
                                    class="flex-row flex align-items-center justify-content-between gap-2 mr-6 no-underline"
                                    routerLink="/"
                                >
                                    <img
                                        src="assets/icon.png"
                                        alt="Logo"
                                        height="30"
                                        width="30"
                                    >
                                    <h3 class="min-w-max minecraft-font text-3xl stroke spaced-letters text-gray-500">
                                        Panaritiu</h3>
                                </a>
                            </ng-template>
                            <!--    END LOGO & NAME-->
                        </p-menubar>
                    </div>
                `,
                styles  : [
                    `
                      ::ng-deep .p-menubar {
                        background: #1a191b;
                      }

                      ::ng-deep p-menubarsub {
                        width: 100%;
                        display: flex;
                        justify-content: flex-end;
                      }

                      ::ng-deep a.p-menubar-button {
                        order: 3;
                      }

                      .spaced-letters {
                        letter-spacing: .25rem;
                      }
                    `
                ]
            } )
export class NavBarComponent {

    buildMenuItem = (label: string, routerLink: string, icon: string, tooltip?: string): MenuItem => (
        {
            label,
            icon,
            escape                 : false,
            routerLink,
            routerLinkActiveOptions: { exact: true },
            tooltipOptions         : {
                tooltipLabel   : tooltip,
                tooltipPosition: 'bottom'
            }
        }
    );

    items: MenuItem[] = [
        this.buildMenuItem( 'Home', AppR.landing.full, 'bi bi-house' ),
        this.buildMenuItem( 'Mods', AppR.mods.full, 'bi bi-book-half', 'Mods List & Download' ),
        this.buildMenuItem( 'Mobs', AppR.mobs.full, 'bi bi-hearts', 'Register or see Mob Teleporting' ),
        this.buildMenuItem( 'RCON', AppR.rcon.full, 'bi bi-cpu', 'Remote Console (Admin)' )
    ];
}
