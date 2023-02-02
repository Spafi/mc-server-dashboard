export interface AppError {
    readonly message: string;
    readonly name: string;
    readonly field?: string;
}
