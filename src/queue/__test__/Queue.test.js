import Queue from '../Queue';

describe('Queue', () => {
    context('when create empty queue', () => {
        it('returns new queue and new linkedList', () => {
            const queue = new Queue();

            expect(queue).toBeDefined();
            expect(queue.linkedList).not.toBeNull();
        });
    });

    context('when enqueue "1", "2" data to queue', () => {
        it('returns queue data with "1,2"', () => {
            const queue = new Queue();

            queue.enqueue(1);
            queue.enqueue(2);

            expect(queue.toString()).toBe('1,2');
        });
    });

    context('when dequeue to queue with data 1,2', () => {
        it('returns 1', () => {
            const queue = new Queue();

            queue.enqueue(1);
            queue.enqueue(2);

            expect(queue.dequeue().value).toBe(1);
        });
    });

    context('when enqueue object data to queue', () => {
        it('returns queue data with object data', () => {
            const queue = new Queue();

            queue.enqueue({
                key: '키1',
                value: '하하',
            });
            queue.enqueue({
                key: '키2',
                value: '호호',
            });

            const stringifier = value => `${value.key}:${value.value}`;

            expect(queue.toString(stringifier)).toBe('키1:하하,키2:호호');
            expect(queue.dequeue().value.value).toBe('하하');
            expect(queue.dequeue().value.value).toBe('호호');
        });
    });

    context('when peek data from queue after enqueue', () => {
        it('returns first data', () => {
            const queue = new Queue();

            queue.enqueue(1);
            queue.enqueue(2);

            expect(queue.peek()).toBe(1);
            expect(queue.peek()).toBe(1);
            expect(queue.peek()).toBe(1);
        });
    });

    context('when peek data from queue after dequeue', () => {
        it('return first data after one time dequeue', () => {
            const queue = new Queue();

            queue.enqueue(1);
            queue.enqueue(2);

            queue.dequeue();

            expect(queue.peek()).toBe(2);
            expect(queue.peek()).toBe(2);
        });
    });

    context('when peek data from empty queue', () => {
        it('return null', () => {
            const queue = new Queue();

            expect(queue.peek()).toBeNull();
        });
    });

    context('with empty queue', () => {
        it('returns isEmpty() is true', () => {
            const queue = new Queue();

            expect(queue.isEmpty()).toBeTruthy();
        });
    });

    context('with not empty queue', () => {
        it('returns isEmpty() is false', () => {
            const queue = new Queue();

            queue.enqueue(1);

            expect(queue.isEmpty()).toBeFalsy();
        });
    });

    context('with many data', () => {
        it('returns FIFO order', () => {
            const queue = new Queue();

            queue.enqueue(1);
            queue.enqueue(2);

            expect(queue.dequeue().value).toBe(1);
            expect(queue.dequeue().value).toBe(2);
            expect(queue.dequeue()).toBeNull();
            expect(queue.isEmpty()).toBeTruthy();
        });
    });
});