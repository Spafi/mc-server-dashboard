import { ErrorDto } from './error-dto';

export interface HttpErrorResponseDto {
    /**
     * Http status code
     */
    statusCode: number;
    /**
     * Error list
     */
    message: Array<ErrorDto>;
    /**
     * Http error description
     */
    error: string;
}

