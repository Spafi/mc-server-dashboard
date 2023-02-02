import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Message, MessageService } from 'primeng/api';
import { filter, map, tap } from 'rxjs';
import { onlyIfDefined } from '~shared/rxjs-operators';
import { valueIsEmpty, valueIsNotEmpty } from '~shared/validations/is-empty.function';
import * as CoreActions from './core.actions';

@Injectable()
export class CoreEffects {

    displayErrorMessage$ = createEffect( () => this.actions$.pipe(
        ofType( CoreActions.displayToastErrorMessage ),
        map( this.appMessageToMessage.bind( this ) ),
        tap( this.displayErrorMessage.bind( this ) )
    ), { dispatch: false } );

    displaySuccessMessage$ = createEffect( () => this.actions$.pipe(
        ofType( CoreActions.displayToastSuccessMessage ),
        map( this.appMessageToMessage.bind( this ) ),
        tap( this.displaySuccessMessage.bind( this ) )
    ), { dispatch: false } );

    displayServerErrorMessage$ = createEffect( () => this.actions$.pipe(
        ofType( CoreActions.displayToastServerErrors ),
        filter( data => valueIsNotEmpty( data.errors ) ),
        map( this.appErrorMessageToMessage.bind( this ) ),
        onlyIfDefined,
        tap( this.displayErrorMessage.bind( this ) )
    ), { dispatch: false } );

    displayInfoMessage$ = createEffect( () => this.actions$.pipe(
        ofType( CoreActions.displayToastInfoMessage ),
        map( this.appMessageToMessage.bind( this ) ),
        tap( this.displayInfoMessage.bind( this ) )
    ), { dispatch: false } );

    constructor(
        private actions$: Actions,
        private readonly messageService: MessageService
    ) {
    }

    private appMessageToMessage(data: CoreActions.AppMessage): Message {
        return (
            {
                summary: data.title,
                detail : data.body,
                life   : data.life
            }
        );
    }

    private appErrorMessageToMessage(data: ReturnType<typeof CoreActions.displayToastServerErrors>): Message | undefined {
        if( valueIsEmpty( data.errors ) ) {
            return;
        }

        const finalMessage: Message = {
            summary: data.title, life: data.life, closable: true, icon: 'pi-exclamation-triangle'
        };
        let detail = '';

        data.errors.forEach( error => {
            const fieldAndError = [ error.field, error.message ].filter( valueIsNotEmpty )
                                                                .join( ': ' );
            detail = `${ detail }\n${ fieldAndError }`;
        } );

        finalMessage.detail = detail;

        return finalMessage;
    }

    private displayErrorMessage(message: Message): void {
        this.messageService.add( {
                                     ...message, severity: 'error', closable: true, icon: 'bi bi-exclamation-triangle'
                                 } );
    }

    private displaySuccessMessage(message: Message): void {
        this.messageService.add( { ...message, severity: 'success', closable: true, icon: 'bi bi-check' } );
    }

    private displayInfoMessage(message: Message): void {
        this.messageService.add( { ...message, severity: 'info', closable: true, icon: 'bi bi-info' } );
    }
}
