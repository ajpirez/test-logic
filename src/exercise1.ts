export const merge_arrays = (a: number[], b: number[]): number[] => {
    const result: number[] = [];
    let i = 0;
    let j = 0;
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            result.push(a[i]);
            i++;
        } else {
            result.push(b[j]);
            j++;
        }
    }
    while (i < a.length) {
        result.push(a[i]);
        i++;
    }
    while (j < b.length) {
        result.push(b[j]);
        j++;
    }
    return result;
};

const a: number[] = [1, 3, 5, 7, 9];
const b: number[] = [2, 4, 6, 8, 10];
const result: number[] = merge_arrays(a, b);
console.log(result)