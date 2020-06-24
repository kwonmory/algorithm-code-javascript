import LinkedListNode from "./LinkedListNode";

export default class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new LinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }

    prepend(value) {
        const newNode = new LinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }

        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    delete(value) {
        let currentNode = this.head;
        let previousNode = currentNode;

        while (currentNode) {
            if (currentNode.value === value) {
                previousNode.next = currentNode.next;

                return this;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        return null;
    }

    deleteTail() {

        const deletedTail = this.tail;

        if (!deletedTail) {
            return deletedTail;
        }

        if (this.tail === this.head) {
            this.tail = null;
            this.head = null;

            return deletedTail;
        }

        let currentNode = this.head;

        while (currentNode.next) {

            if (!currentNode.next.next) {
                currentNode.next = null;
            } else {
                currentNode = currentNode.next;
            }
        }

        this.tail = currentNode;

        return deletedTail;
    }

    deleteHead() {
        const deleteHead = this.head;

        if (!deleteHead) {
            return deleteHead;
        }

        if (deleteHead === this.tail) {
            this.head = null;
            this.tail = null;

            return deleteHead;
        }

        this.head = this.head.next;

        return deleteHead;
    }

    find({value}) {
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }

        return null;
    }

    reverse() {
        let previousNode = null;
        let nextNode = null;
        let currentNode = this.head;

        while (currentNode) {
            nextNode = currentNode.next; // 다음 노드를 저장
            currentNode.next = previousNode; // 다음 링크를 이전 노드로 설정
            previousNode = currentNode; // 이전 노드는 현재 노드로 설정해서 이전 노드를 가르키도록
            currentNode = nextNode; // 현재 노드 위치를 다음 노드로 변경
        }

        this.tail = this.head;
        this.head = previousNode;
    }

    toString(callback) {
        const arr = [];

        let currentNode = this.head;

        while (currentNode) {
            arr.push(currentNode);
            currentNode = currentNode.next;
        }

        return arr.map(node => node.toString(callback)).toString();
    }
}