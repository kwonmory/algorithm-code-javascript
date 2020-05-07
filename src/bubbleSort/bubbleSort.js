function bubble(arr) {
    let result = arr.slice();

    for (let i = 0; i < result.length-1; i++) {
        for (let j = result.length-1; j > i; j--) {
            if (result[j-1] > result[j]) {
                let tmp = result[j];
                result[j] = result[j-1];
                result[j-1] = tmp;
            }
        }
    }
    return result;
}

module.exports = bubble;