import { Component, OnInit } from '@angular/core';

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
export class ServerInfoComponent implements OnInit {

    serverStatusInfo: ServerStatusData = {
        isOnline          : true,
        onlinePlayers     : [ 'Spaf', 'dianaabanana' ],
        onlinePlayersCount: 0,
        totalPlayers      : 0,
        ping              : 0
    };

    constructor() {
    }

    ngOnInit(): void {
    }

}
