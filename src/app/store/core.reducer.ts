import { createReducer } from '@ngrx/store';
import {
    failedToLoadServerStatus,
    failedToStartServer,
    failedToStopServer,
    loadServerStatus,
    serverStatusLoaded,
    startedServer,
    startServer,
    stoppedServer,
    stopServer
} from '~landing/state/landing.actions';
import { CoreState, onGroup } from '~store/redux-factory';

export const coreFeatureKey = 'core';


const initialState: CoreState = {
    actionResults: {}
};

export const reducer = createReducer(
    initialState,
    ...onGroup(
        loadServerStatus,
        serverStatusLoaded,
        failedToLoadServerStatus
    ),
    ...onGroup(
        startServer,
        startedServer,
        failedToStartServer
    ),
    ...onGroup(
        stopServer,
        stoppedServer,
        failedToStopServer
    )
);
