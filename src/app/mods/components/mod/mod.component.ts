import { Component, Input } from '@angular/core';
import { Mod } from '~mods/mods';

@Component( {
                selector: 'app-mod[mod]',
                template: `
                    <div
                        [id]="mod.name"
                        class="h-30rem bg-gray mb-4 border-round-md p-4 flex flex-column"
                    >

                        <div class="flex align-items-center gap-4 mb-4">
                            <p-image
                                alt="Image"
                                imageClass="border-round-md"
                                src="assets/images/mods/more-gems.png"
                                width="50"
                            >
                            </p-image>

                            <p class="text-xl font-bold my-0">{{mod.name}}</p>
                        </div>

                        <div class="bg-white-alpha-10 border-purple border-1 flex-grow-1 border-round-md">
                            Feature in development
                        </div>

                    </div>
                `,
                styles  : []
            } )
export class ModComponent {

    @Input() mod!: Mod;

}
