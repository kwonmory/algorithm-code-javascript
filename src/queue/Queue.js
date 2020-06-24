import LinkedList from "../linked-list/LinkedList";

export default class Queue {
    constructor() {
        this.linkedList = new LinkedList();
    }

    enqueue(value) {
        this.linkedList.append(value);
        return this;
    }

    dequeue() {
        return this.linkedList.deleteHead() || null;
    }

    isEmpty() {
        return !this.linkedList.head;
    }

    peek() {
        if (!this.linkedList.head) {
            return null;
        }

        return this.linkedList.head.value;
    }

    toString(callback) {
       return this.linkedList.toString(callback);
    }
}