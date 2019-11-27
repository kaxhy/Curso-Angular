export function factorial(n: number): number {
    if ( n === 0 ) {
        return n;
    }
    return n * factorial(n - 1);
}
