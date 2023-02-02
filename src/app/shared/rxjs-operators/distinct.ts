import { isEqual } from 'lodash-es';
import { valueIsEmpty, valueIsNotEmpty } from '~shared/validations/is-empty.function';

export class Distinct<T> {
    private lastValue?: T;
    private readonly debug?: string;
    private readonly onlyNotNull: boolean;

    private constructor(onlyNotNull: boolean, initialValue?: T, debug?: string) {
        this.lastValue = initialValue;
        this.debug = debug;
        this.onlyNotNull = onlyNotNull;
    }

    static init<T>(onlyNotNull: boolean, initialValue?: T, debug?: string): Distinct<T> {
        if( valueIsNotEmpty( debug ) ) {
            console.debug( `${ debug }: initialValue`, initialValue );
        }
        return new Distinct( onlyNotNull, initialValue, debug );
    }

    onChange(newValue: T, cb: (newValue: T | Required<T>) => void): boolean {
        if( valueIsNotEmpty( this.debug ) ) {
            console.debug( `${ this.debug }: lastValue: `, this.lastValue );
            console.debug( `${ this.debug }: newValue: `, newValue );
            console.debug( `${ this.debug }: shouldExec: `, !isEqual( this.lastValue, newValue ) );
        }

        const hasEmptyValues = valueIsEmpty( newValue ) || Object.values( newValue )
                                                                 .some( valueIsEmpty );

        if( hasEmptyValues ) {
            if( valueIsNotEmpty( this.debug ) ) {
                console.debug( `${ this.debug }: value is empty, will not be emitted`, newValue );
            }
            return false;
        }

        if( !isEqual( this.lastValue, newValue ) ) {
            this.lastValue = newValue;
            cb( newValue );

            if( valueIsNotEmpty( this.debug ) ) {
                console.debug( `${ this.debug }: valueEmitted: `, newValue );
            }
        }

        return true;
    }
}
