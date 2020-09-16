const shellSort = (list) => {
    const n = list.length;

    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        if (gap  % 2 === 0) gap++;

        for (let i = 0; i < gap; i++) insertionSort(list, i, n - 1, gap);
    }

    return list;

    function insertionSort(list, first, last, gap) {
        for (let i = first + gap; i <= last; i = i + gap) {
            let key = list[i];
            let j;

            for (j = i - gap; j >= first && list[j] > key; j = j - gap) {
                list[j + gap] = list[j];
            }

            list[j + gap] = key;
        }
    }
}

export default shellSort;