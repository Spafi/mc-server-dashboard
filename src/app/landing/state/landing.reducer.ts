import { createReducer, on } from '@ngrx/store';
import { ServerStatusData } from '~landing/components/server-info/server-info.component';
import { serverStatusLoaded, startedServer, stoppedServer, triggeredStopServer } from '~landing/state/landing.actions';

export const landingFeatureKey = 'landing';

export interface LandingState {
    serverStatus: ServerStatusData;

}

export type ServerStatusOptions = 'online' | 'offline' | 'booting' | 'stopping'

export interface ServerStatus {
    currentStatus: ServerStatusOptions;
}

export const initialState: LandingState = {
    serverStatus: {
        isOnline          : false,
        onlinePlayers     : [],
        onlinePlayersCount: 0,
        ping              : 0,
        currentStatus     : 'offline'
    }
};

export const reducer = createReducer(
    initialState,
    // ================= Status ================= //
    on( serverStatusLoaded, (state, { data }): LandingState => (
        {
            ...state,
            serverStatus: data
        }
    ) ),
    on( startedServer,
        stoppedServer,
        triggeredStopServer,
        (state, { data }): LandingState => (
            {
                ...state,
                serverStatus: {
                    ...state.serverStatus,
                    currentStatus: data.currentStatus
                }
            }
        ) )
);
