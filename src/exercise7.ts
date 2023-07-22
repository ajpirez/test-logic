export const remove_duplicates = (array: number[]): number[] => {
    return [...new Set(array)]
}

const array: number[] = [1, 2, 4, 5, 6, 1, 2, 2, 3, 4, 5, 6, 2, 1];
const result: number[] = remove_duplicates(array);
console.log(result);