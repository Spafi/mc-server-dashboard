import { Injector } from '@angular/core';

export let ServiceInjector: Injector;

export function setServiceInjector(injector: Injector): void {
    if( ServiceInjector ) {
        console.error( 'Service injector already set' );
        return;
    }

    ServiceInjector = injector;
}
