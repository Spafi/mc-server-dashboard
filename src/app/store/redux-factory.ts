import { ActionCreator, Creator, on } from '@ngrx/store';
import { camelCase } from 'lodash-es';
import { StoreStatusEnum } from '~config/constants/store.constants';
import { AppError } from '~config/interfaces/app-error.interface';

export type ActionsResultState = Record<ActionType, ActionResult>;

export interface ActionResult {
    status: StoreStatusEnum;
    errors: AppError[];
}

export type ActionType = string;


export const initialActionResult: ActionResult = {
    errors: [],
    status: StoreStatusEnum.INITIAL
};

export interface CoreState {
    actionResults: ActionsResultState;
}

// Creates a reducer to monitor action results
export function onAction<T extends ActionCreator<any>>(action: T, rootAction: ActionCreator<any> | null, stateUpdater: (oldState: ActionResult, newState: ReturnType<T>) => ActionResult) {
    return on<CoreState, T[]>( action,
                               (state: CoreState, data: ReturnType<T>) => (
                                   {
                                       ...state,
                                       actionResults: {
                                           ...state.actionResults,
                                           [camelCase( `${ rootAction?.type ?? action.type }` )]:
                                               rootAction
                                               ? stateUpdater( state.actionResults[camelCase( rootAction.type )]
                                                                   ?? initialActionResult, data )
                                               : stateUpdater( initialActionResult, data )
                                       }
                                   }
                               ) );
}

// Groups multiple reducers for a group of actions
export function onGroup(
    main: ActionCreator<any>,
    success: ActionCreator<any>,
    failed: ActionCreator<any, Creator<any[], { errors: AppError[]; }>>,
    reset?: ActionCreator<any> | ActionCreator<any>[]
) {
    let handlers = [
        onAction( main, null, (state) => (
            { ...state, status: StoreStatusEnum.LOADING, errors: [] }
        ) ),
        onAction( success, main, (state) => (
            { ...state, status: StoreStatusEnum.SUCCESS, errors: [] }
        ) ),
        onAction( failed, main, (state, { errors }) => (
            { ...state, status: StoreStatusEnum.FAILED, errors }
        ) )
    ];
    if( reset ) {
        Array.isArray( reset )
        ? reset.forEach( r => handlers.push(
            onAction( r, main, () => initialActionResult )
        ) )
        : handlers.push( onAction( reset, main, () => initialActionResult ) );
    }

    return handlers;

}

