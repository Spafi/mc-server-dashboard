import { createAction, props } from '@ngrx/store';
import { AppError } from '~config/interfaces/app-error.interface';
import { ServerStatusData } from '~landing/components/server-info/server-info.component';
import { ServerStatus } from '~landing/state/landing.reducer';

//============================ Server Status ============================//

export const loadServerStatus = createAction(
    '[Landing | Server Status] Load Server Status'
);

export const serverStatusLoaded = createAction(
    '[API] Loaded Server Status',
    props<{ data: ServerStatusData }>()
);

export const failedToLoadServerStatus = createAction(
    '[API] Failed to load Server Status',
    props<{ errors: AppError[] }>()
);

//============================ Start Server ============================//

export const startServer = createAction(
    '[Landing | Server Status] Start Server'
);

export const triggeredStartServer = createAction(
    '[API] Triggered Start Server',
    props<{ data: ServerStatus }>()
);

export const startedServer = createAction(
    '[API] Started Server',
    props<{ data: ServerStatus }>()
);

export const failedToStartServer = createAction(
    '[API] Failed to Start Server',
    props<{ errors: AppError[] }>()
);


//============================ Stop Server ============================//
export const stopServer = createAction(
    '[Landing | Server Status] Stop Server'
);

export const triggeredStopServer = createAction(
    '[API] Triggered Stop Server',
    props<{ data: ServerStatus }>()
);

export const stoppedServer = createAction(
    '[API] Stopped Server',
    props<{ data: ServerStatus }>()
);

export const failedToStopServer = createAction(
    '[API] Failed to Stop Server',
    props<{ errors: AppError[] }>()
);
