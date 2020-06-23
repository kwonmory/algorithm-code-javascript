import LinkedList from '../LinkedList';

describe('LinkedList', () => {

    context('when create empty linked list', () => {
        it ('returns empty string', () => {
            const linkedList = new LinkedList();

            expect(linkedList.toString()).toBe('');
        });
    });

    context('when append node to linked list', () => {
        it ('returns with data in linked list', () => {
            const linkedList = new LinkedList();

            expect(linkedList.head).toBeNull();
            expect(linkedList.tail).toBeNull();

            linkedList.append(1);
            linkedList.append(2);

            expect(linkedList.toString()).toBe('1, 2');
            expect(linkedList.tail.next).toBeNull();
            expect(linkedList.head.next.value).toBe(2);
        });
    });

    context('when pre append node to linked list', () => {
        it ('returns with data in linked list front', () => {
            const linkedList = new LinkedList();

            linkedList.prepend(2);
            expect(linkedList.head.toString()).toBe('2');
            expect(linkedList.tail.toString()).toBe('2');

            linkedList.append(1);
            linkedList.prepend(3);

            expect(linkedList.toString()).toBe('3, 2, 1');
        });
    });

    context('when not exist node delete node to linked list', () => {
        it ('returns null', () => {
            const linkedList = new LinkedList();

            expect(linkedList.delete(2)).toBeNull();
        })
    });

    context('when delete node to linked list', () => {
        it ('returns with data without deleted node', () => {
            const linkedList = new LinkedList();

            linkedList.append(1);
            linkedList.append(2);
            linkedList.append(3);

            expect(linkedList.toString()).toBe('1, 2, 3');

            linkedList.delete(2);

            expect(linkedList.head.value).toBe(1);
            expect(linkedList.tail.value).toBe(3);
            expect(linkedList.head.next.value).toBe(3);
        });
    });

    context('when not exist node, delete tail node to linked list', () => {
        it ('returns null', () => {
            const linkedList = new LinkedList();

            expect(linkedList.deleteTail()).toBeNull();
        })
    })

    context('when delete tail node to linked list', () => {
        it ('returns with data without tail node', () => {
            const linkedList = new LinkedList();

            linkedList.append(1);
            linkedList.append(2);
            linkedList.append(3);
            linkedList.append(4);

            expect(linkedList.tail.value).toBe(4);

            linkedList.deleteTail();

            expect(linkedList.tail.value).toBe(3);
        });
    });

    context('when delete tail with one node', () => {
        it ('returns delete node', () => {
            const linkedList = new LinkedList();

            linkedList.append(1);

            expect(linkedList.deleteTail().value).toBe(1);
        })
    })

    context('when delete head node to linked list', () => {
        it ('returns with data without head node', () => {
            const linkedList = new LinkedList();

            linkedList.append(1);
            linkedList.append(2);
            linkedList.append(3);
            linkedList.append(4);

            expect(linkedList.head.value).toBe(1);

            linkedList.deleteHead();

            expect(linkedList.head.value).toBe(2);
        });
    });

    context('when delete head with empty', () => {
        it ('returns null', () => {
            const linkedList = new LinkedList();

            expect(linkedList.deleteHead()).toBeNull();
        });
    });

    context('when delete head with one element ', () => {
        it ('returns delete Node', () => {
            const linkedList = new LinkedList();

            linkedList.append(1);

            expect(linkedList.deleteHead().value).toBe(1);
        })
    })

    context('when exist node', () => {
        it ('returns found node', () => {

            const linkedList = new LinkedList();

            linkedList.append(1);

            expect(linkedList.find({ value: 1 })).toBeDefined();

            linkedList.append(2).append(3);

            expect(linkedList.find({ value: 2}).value).toBe(2);
        });
    });

    context('when not exist node', () => {
        it ('returns null', () => {
            const linkedList = new LinkedList();

            expect(linkedList.find({ value: 5 })).toBeNull();
        });
    });

    context('when reverse linked list', () => {
        it ('return reverse list', () => {
            const linkedList = new LinkedList();

            linkedList.append(1);
            linkedList.append(2);
            linkedList.append(3);
            linkedList.append(4);

            linkedList.reverse();

            expect(linkedList.tail.value).toBe(1);
            expect(linkedList.head.value).toBe(4);

            linkedList.reverse();

            expect(linkedList.tail.value).toBe(4);
            expect(linkedList.head.value).toBe(1);
        });
    });
})