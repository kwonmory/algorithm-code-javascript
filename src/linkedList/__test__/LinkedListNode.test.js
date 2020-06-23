import LinkedListNode from '../LinkedListNode';

describe('LinkedListNode', () => {

    context('when create node with value "1"', () => {
        it ('returns node value is 1' , () => {
            const node = new LinkedListNode(1);

            expect(node.value).toBe(1);
            expect(node.next).toBeNull();
        })
    });

    context('when create node with object as value', () => {
        it ('returns node with object value', () => {
            const node = new LinkedListNode({
                value: 1,
                key: 'test',
            });

            expect(node.value.value).toBe(1);
            expect(node.value.key).toBe('test');
            expect(node.next).toBeNull();
        });
    });

    context('when link two nodes together', () => {
        it ('returns linked two nodes', () => {
            const node1 = new LinkedListNode(2);
            const node2 = new LinkedListNode(3, node1);

            expect(node1.next).toBeNull();
            expect(node1.value).toBe(2);
            expect(node2.next).toEqual(node1);
            expect(node2.value).toBe(3);
            expect(node2.next.value).toBe(2);
        });
    });

    context('when call toString()', () => {
        it('returns value string', () => {
            const node = new LinkedListNode(1);
            expect(node.toString()).toBe('1');
        });
    })
});