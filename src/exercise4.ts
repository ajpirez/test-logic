export const isAnagram = (a: string, b: string):boolean => {
    if (a.length !== b.length) return false
    const chars = a.split('')
    for (const char of chars) {
        if (!b.includes(char)) return false
    }
    return true
}

console.log(isAnagram('roma', 'amor'))