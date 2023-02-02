import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from 'environments/environment';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { interval, map, Observable } from 'rxjs';
import { AppState } from '~app/store';
import { AppMessageService } from '~config/services/app-message.service';
import { ServerService } from '~landing/services/server.service';
import { loadServerStatus, startServer, stopServer } from '~landing/state/landing.actions';
import { ServerStatusOptions } from '~landing/state/landing.reducer';
import { serverStatus } from '~landing/state/landing.selectors';

export interface ServerStatusData {
    isOnline: boolean;
    onlinePlayers: string[];
    onlinePlayersCount: number;
    ping: number;
    currentStatus: ServerStatusOptions;
}

@UntilDestroy()
@Component( {
                selector   : 'app-server-info',
                templateUrl: './server-info.component.html'
            } )
export class ServerInfoComponent implements OnInit {

    avatarSourceUrl = environment.avatarSourceUrl;

    serverStatusInfo$!: Observable<ServerStatusData>;

    constructor(
        private readonly serverService: ServerService,
        private readonly messageService: AppMessageService,
        private readonly store: Store<AppState>
    ) {
    }

    ngOnInit(): void {
        this.loadServerStatus();
        this.serverStatusInfo$ = this.selectServerStatus();
    }

    startServer(): void {
        this.store.dispatch( startServer() );
        this.messageService.showInfo( 'Starting Server' );
    }

    stopServer(): void {
        this.store.dispatch( stopServer() );
        this.messageService.showInfo( 'Stopping Server' );
    }

    private loadServerStatus(): void {
        const autoRefreshInterval$ = interval( 5000 )
            .pipe( takeUntilDestroy( this ) );

        autoRefreshInterval$.pipe(
            map( () => this.store.dispatch( loadServerStatus() ) )
        )
                            .subscribe();
    }

    private selectServerStatus(): Observable<ServerStatusData> {
        return this.store.select( serverStatus );
    }

}
