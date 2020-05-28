
class MyArray {
    constructor() {
        this.array = [];
    }

    add(data) {
        this.array.push(data);
    }

    remove(data) {
        this.array = this.array.filter(v => v !== data);
    }

    search(data) {
        return this.array.findIndex(v => v === data);
    }

    getAtIndex(index) {
        return this.array[index];
    }

    size() {
        return this.array.length;
    }

    toString(delimiter = ' ') {
        return this.array.join(delimiter);
    }
}

module.exports = MyArray;