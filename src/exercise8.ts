export const binarySearch = (list: number[], target: number, start = 0, end = list.length - 1): boolean => {
    const middle: number = Math.floor((start + end) / 2);
    if (start > end) {
        return false;
    }
    if (target === list[middle]) {
        return true;
    } else if (target < list[middle]) {
        return binarySearch(list, target, start, middle - 1);
    } else {
        return binarySearch(list, target, middle + 1, end);
    }
}

const list: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target: number = 5;
const found: boolean = binarySearch(list, target);
console.log(found);