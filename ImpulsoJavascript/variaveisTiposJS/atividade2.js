let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]

function saiPares(array) {
    if (!array || !array.length) return -1;

    for (const i in array) {
        if (array[i] % 2 === 0) {
            array[i] = 0;
        }
    }
    return array;
}

console.log(saiPares([]));