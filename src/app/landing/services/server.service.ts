import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { httpErrorHandler } from '~config/functions/http-error-handler.function';
import { ServerStatusData } from '~landing/components/server-info/server-info.component';
import { ServerStatus } from '~landing/state/landing.reducer';
import { PlayerToMob } from '~mobs/mobs.component';
import { environment } from '../../../environments/environment';


@Injectable( { providedIn: 'root' } )
export class ServerService {

    constructor(private http: HttpClient) {
    }

    getStatus(): Observable<ServerStatusData> {
        return this.http.get<any>( environment.panaritiuBackendRoutes.status, {} )
                   .pipe(
                       catchError( httpErrorHandler )
                   );
    }

    startServer(): Observable<ServerStatus> {
        return this.http.post<any>( environment.panaritiuBackendRoutes.start, {} )
                   .pipe(
                       catchError( httpErrorHandler )
                   );
    }

    stopServer(): Observable<ServerStatus> {
        return this.http.post<any>( environment.panaritiuBackendRoutes.stop, {} )
                   .pipe(
                       catchError( httpErrorHandler )
                   );
    }

    getMobsTeleportList(): Observable<PlayerToMob[]> {
        return this.http.get<any>( environment.panaritiuBackendRoutes.mobTeleport, {} )
                   .pipe(
                       catchError( httpErrorHandler )
                   );
    }

    addMobTeleport(data: PlayerToMob): Observable<PlayerToMob[]> {
        return this.http.post<PlayerToMob[]>( environment.panaritiuBackendRoutes.mobTeleportAdd,
                                              { ...data } )
                   .pipe(
                       catchError( httpErrorHandler )
                   );
    }

    deleteMobTeleport(data: PlayerToMob): Observable<PlayerToMob[]> {
        return this.http.post<PlayerToMob[]>( environment.panaritiuBackendRoutes.mobTeleportDelete,
                                              { ...data } )
                   .pipe(
                       catchError( httpErrorHandler )
                   );
    }

    downloadMods(): Observable<any> {
        return this.http.get<any>( environment.panaritiuBackendRoutes.downloadMods, {} )
                   .pipe(
                       catchError( httpErrorHandler )
                   );
    }

}
