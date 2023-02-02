import { isEqual } from 'lodash-es';
import { distinctUntilChanged, filter, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Distinct } from '~shared/rxjs-operators/distinct';
import { isDefined } from '~shared/validations/is-defined.function';
import { valueIsNotEmpty } from '../validations/is-empty.function';

export function onlyIfDefined<T>(source$: Observable<T>): Observable<NonNullable<T>> {
    return source$.pipe( filter( isDefined ), map( v => v as NonNullable<T> ) );
}

export function excludeEmptyValues<T>(source$: Observable<T>): Observable<NonNullable<T>> {
    return source$.pipe( filter( valueIsNotEmpty ), filter( isDefined ), map( v => v as NonNullable<T> ) );
}

export function ignoreConsecutiveDuplicateValues<T>(source$: Observable<T>): Observable<T> {
    return source$.pipe( distinctUntilChanged( (previous, current) => isEqual( previous, current ) ) );
}

export function tapOnSlice<T, S>(slice: (data: T) => S, action: (newVal: S) => void, initialValue?: S, debug?: string): (source$: Observable<T>) => Observable<T> {
    return (source$: Observable<T>): Observable<T> => {
        const distinct = Distinct.init<S>( false, initialValue, debug );
        return source$.pipe(
            tap( (data: T) => distinct.onChange( slice( data ), action ) )
        );
    };
}
