export const find_median = (a: number[]):number => {
    const length:number = a.length;
    const middle:number = Math.floor(length / 2);
    a.sort((a, b) => a - b);
    if (length % 2 === 0) {
        return (a[middle - 1] + a[middle]) / 2;
    } else {
        return a[middle];
    }
}

// const array: number[] = [1, 2, 3, 4, 5,6];
const array: number[] = [3,5,6,7,8,9,15,22];
const median: number = find_median(array);
console.log(median);