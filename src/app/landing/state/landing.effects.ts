import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AppState } from '~app/store';
import { ServerService } from '~landing/services/server.service';
import {
    failedToLoadServerStatus,
    failedToStartServer,
    failedToStopServer,
    loadServerStatus,
    serverStatusLoaded,
    startServer,
    stopServer,
    triggeredStartServer,
    triggeredStopServer
} from '~landing/state/landing.actions';


@Injectable()
export class LandingEffects {

    loadServerStatus$ = createEffect( () => {
        return this.actions$.pipe(
            ofType( loadServerStatus ),
            mergeMap( () => {
                return this.serverService.getStatus()
                           .pipe(
                               map( data => serverStatusLoaded( { data } ) ),
                               catchError( errors => of( failedToLoadServerStatus( { errors } ) ) )
                           );
            } )
        );
    } );

    startServer$ = createEffect( () => {
        return this.actions$.pipe(
            ofType( startServer ),
            mergeMap( () => {
                return this.serverService.startServer()
                           .pipe(
                               map( data => triggeredStartServer( { data } ) ),
                               catchError( errors => of( failedToStartServer( { errors } ) ) )
                           );
            } )
        );
    } );

    stopServer$ = createEffect( () => {
        return this.actions$.pipe(
            ofType( stopServer ),
            mergeMap( () => {
                return this.serverService.stopServer()
                           .pipe(
                               map( data => triggeredStopServer( { data } ) ),
                               catchError( errors => of( failedToStopServer( { errors } ) ) )
                           );
            } )
        );
    } );


    constructor(
        private actions$: Actions,
        private readonly store: Store<AppState>,
        private readonly serverService: ServerService
    ) {
    }
}
