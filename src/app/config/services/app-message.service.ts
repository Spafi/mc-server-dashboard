import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { valueIsEmpty } from '~app/shared/validations/is-empty.function';
import { AppState } from '~app/store';
import { AppError } from '~config/interfaces/app-error.interface';
import * as CoreActions from '~store/core.actions';


const MESSAGE_DISPLAY_TIME = 3000;

@Injectable( { providedIn: 'root' } )
export class AppMessageService {

    constructor(
        private store: Store<AppState>
    ) {
    }

    showErrorOrSuccess(success: Observable<boolean>,
                       errors: Observable<AppError[]>,
                       successMessage: string): Subscription {
        return success
            .pipe(
                switchMap( isSuccess => {
                    if( !isSuccess ) {
                        return errors;
                    }
                    return of( true );
                } ) )
            .subscribe( (data: AppError[] | boolean) => {
                if( data === true ) {
                    this.showSuccess( successMessage );
                } else if( Array.isArray( data ) ) {
                    this.showErrors( data as AppError[] );
                }
            } );
    }

    showSuccess(successMessage: string): void {
        const title = 'Success';
        this.store.dispatch( CoreActions.displayToastSuccessMessage( {
                                                                         title, body: successMessage,
                                                                         life       : MESSAGE_DISPLAY_TIME
                                                                     } ) );
    }

    showErrors(errors: AppError[]): void {
        if( valueIsEmpty( errors ) ) {
            return;
        }
        this.store.dispatch( CoreActions.displayToastServerErrors( {
                                                                       errors, life: MESSAGE_DISPLAY_TIME,
                                                                       title       : 'Something went wrong!'
                                                                   } ) );
    }

    showInfo(infoMessage: string): void {
        const title = 'Info';
        this.store.dispatch( CoreActions.displayToastInfoMessage( {
                                                                      title, body: infoMessage,
                                                                      life       : MESSAGE_DISPLAY_TIME
                                                                  } ) );
    }

}
