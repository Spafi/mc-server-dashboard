export interface ErrorDto {
    /**
     * Error short code
     */
    name: string;
    /**
     * Error description
     */
    message: string;
    /**
     * Field that triggered the error. It will be null for global errors
     */
    field?: string | null;
}

