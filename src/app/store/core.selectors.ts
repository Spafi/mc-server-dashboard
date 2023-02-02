import { ActionCreator, createFeatureSelector, createSelector } from '@ngrx/store';
import { camelCase, memoize } from 'lodash-es';
import { ActionsResultState, CoreState, initialActionResult } from '~store/redux-factory';
import * as fromCore from './core.reducer';

export const selectCoreState = createFeatureSelector<CoreState>( fromCore.coreFeatureKey );


const actionResults = createSelector(
    selectCoreState,
    (state) => state.actionResults
);

export const actionState = memoize( (mainAction: ActionCreator<any>) => createSelector(
    actionResults,
    (state: ActionsResultState) => state[camelCase( mainAction.type )] ?? initialActionResult
) );


