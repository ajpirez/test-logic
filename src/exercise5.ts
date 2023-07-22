export const findCommonElements = (lists: number[][]): number[] => {
    const result: number[] = []
    if (lists.length === 0) return result
    const firstList = lists[0];
    firstList.forEach((firstListX) => {
        const element = firstListX;
        if (!result.includes(element)) {
            let isCommon = true;
            lists.forEach(listsX => {
                if (!listsX.includes(element)) {
                    isCommon = false;
                }
            })
            if (isCommon) {
                result.push(element);
            }
        }
    })
    return result;
}

const lists: number[][] = [[1, 2, 3], [2, 3, 4], [3, 4, 5]];
const result: number[] = findCommonElements(lists);
console.log(result);