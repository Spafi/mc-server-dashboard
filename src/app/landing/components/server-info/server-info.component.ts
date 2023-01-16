import { Component } from '@angular/core';
import { environment } from 'environments/environment';

export interface ServerStatusData {
    isOnline: boolean;
    onlinePlayers: string[];
    onlinePlayersCount: number;
    totalPlayers: number;
    ping: number;
}

@Component( {
                selector   : 'app-server-info',
                templateUrl: './server-info.component.html'
            } )
export class ServerInfoComponent {

    avatarSourceUrl = environment.avatarSourceUrl;

    serverStatusInfo: ServerStatusData = {
        isOnline          : true,
        onlinePlayers     : [ 'Spaf', 'dianaabanana' ],
        onlinePlayersCount: 0,
        totalPlayers      : 0,
        ping              : 0
    };
}
