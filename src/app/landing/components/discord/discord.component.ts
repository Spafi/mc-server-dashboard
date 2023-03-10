import { Component } from '@angular/core';

@Component( {
                selector: 'app-discord',
                template: `
                    <iframe
                        allowtransparency="true"
                        class="w-full border-none border-round-md"
                        height="500"
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                        src="https://discord.com/widget?id=1034785395117920266&theme=dark"
                    >
                    </iframe>
                `
            } )
export class DiscordComponent {
}
