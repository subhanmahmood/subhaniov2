export class UnauthorizedError extends Error {
    title: string;
    message: string;

    constructor() {
        super();
        this.title = 'Unauthorized';
        this.message = 'You are not authorized to access this resource.';
        this.name = "UnauthorizedError";
    }
}
