export interface Page<T> {
    results: T[];
    count: number;
    next?: string;
    previous?: string;
}