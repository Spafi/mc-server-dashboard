import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLanding from '~landing/state/landing.reducer';
import { LandingState } from '~landing/state/landing.reducer';

export const selectLandingState = createFeatureSelector<fromLanding.LandingState>(
    fromLanding.landingFeatureKey
);

//========================== Server Status ==========================//

export const serverStatus = createSelector(
    selectLandingState,
    (state: LandingState) => state.serverStatus
);
