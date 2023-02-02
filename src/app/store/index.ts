import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import * as fromLanding from '~landing/state/landing.reducer';
import { LandingState } from '~landing/state/landing.reducer';
import * as fromCore from '~store/core.reducer';
import { CoreState } from '~store/redux-factory';
import { environment } from '../../environments/environment';


export interface AppState {
    [fromCore.coreFeatureKey]: CoreState;
    [fromLanding.landingFeatureKey]: LandingState;

}

export const reducers: ActionReducerMap<AppState> = {
    [fromCore.coreFeatureKey]      : fromCore.reducer,
    [fromLanding.landingFeatureKey]: fromLanding.reducer

};

function localStorageSyncReducer(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
    return localStorageSync( {
                                 keys     : [
                                     {
                                         [fromCore.coreFeatureKey]: {
                                             encrypt: data => btoa( unescape( encodeURIComponent( data ) ) ),
                                             decrypt: data => decodeURIComponent( escape( atob( data ) ) )
                                         }
                                     },
                                     {
                                         [fromLanding.landingFeatureKey]: {
                                             encrypt: data => btoa( unescape( encodeURIComponent( data ) ) ),
                                             decrypt: data => decodeURIComponent( escape( atob( data ) ) )
                                         }
                                     }
                                 ],
                                 rehydrate: true,
                                 storage  : sessionStorage
                             } )( reducer );
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
                                                     ? [ localStorageSyncReducer ]
                                                     : [ localStorageSyncReducer ];
