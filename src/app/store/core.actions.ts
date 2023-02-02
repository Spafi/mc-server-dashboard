import { createAction, props } from '@ngrx/store';
import { AppError } from '~app/config/interfaces/app-error.interface';

export interface AppMessage {
    title: string;
    body: string;
    life: number;
}

export const displayToastErrorMessage = createAction(
    '[Core] Display toast error message',
    props<AppMessage>()
);

export interface AppServerErrorMessage {
    title: string;
    errors: AppError[];
    life: number;
}

export const displayToastServerErrors = createAction(
    '[Corer] Display toast server errors',
    props<AppServerErrorMessage>()
);

export const displayToastSuccessMessage = createAction(
    '[Core] Display toast success message',
    props<AppMessage>()
);

export const displayToastInfoMessage = createAction(
    '[Core] Display toast info message',
    props<AppMessage>()
);
