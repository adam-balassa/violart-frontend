interface ErrorRespone {
    errors: {code: number, message: string}[];
    timestamp: Date;
}

interface Response {
    error: boolean;
    message?: string;
}