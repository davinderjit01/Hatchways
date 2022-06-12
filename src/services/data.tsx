export const average = (array: ReadonlyArray<string>) =>
    array.reduce((a: number, b: string) => a + parseFloat(b), 0) / array.length;

