function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.preOrder = preOrder;
    this.inOrder = inOrder;
    this.postOrder = postOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
    this.remove = remove;
}

function insert(data) {
    const node = new Node(data, null, null);
    if (this.root == null) {
        this.root = node;
    } else {
        let current = this.root;
        let parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current === null) {
                    parent.left = node;
                    break;
                }
            } else {
                current = current.right;
                if (current === null) {
                    parent.right = node;
                    break;
                }
            }
        }
    }
}

function inOrder(node) {
    if (!(node === null)) {
        inOrder(node.left);
        console.log(`${node.data} `); // 이는 객체지향적이진 않다.
        inOrder(node.right);
    }
}

function preOrder(node) {
    if (node !== null) {
        console.log(`${node.data} `); // 이는 객체지향적이진 않다.
        preOrder(node.left);
        preOrder(node.right);
    }
}

function postOrder(node) {
    if (node !== null) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(`${node.data} `); // 이는 객체지향적이진 않다.
    }
}

function getMin() {
    let current = this.root;

    while (current.left !== null) {
        current = current.left;
    }

    return current.data;
}

function getMax() {
    let current = this.root;

    while (current.right !== null) {
        current = current.right;
    }

    return current.data;
}

function find(data) {
    let current = this.root;

    while (current.data !== data) {
        if (data < current.data) {
            current = current.left;
        } else {
            current = current.right;
        }
        if (current === null) {
            return -1; // 없다면 -1 을 반환
        }
    }
    return current;
}

function remove(data) {
    removeNode(this.root, data);
}

function removeNode(node, data) {
    if (node === null) {
        return null;
    }

    if (data === node.data) {
        // 삭제할 대상을 찾았네
        if (node.left === null && node.right === null) {
            return null;
        }
        if (node.left === null) {
            // 오른쪽만 처리 해주면 됨
            return node.right;
        }

        if (node.right === null) {
            return node.left;
        }

        // 이제 둘다 있는 상태
        const tempNode = getSmallest(node.right); // 오른쪽 서브 트리중 가장 작은 노드
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data); // 옮겨주었으니 삭제
        return node;
    } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
    } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
    }
}

function getSmallest(node) {
    let current = node;

    while (node.left !== null) {
        current = current.left;
    }

    return current;
}


const nums = new BST();
nums.insert(23);
nums.insert(21);
nums.insert(29);
nums.insert(11);
nums.insert(4);
nums.insert(3);

nums.remove(21);
nums.remove(23);
nums.remove(29);
nums.remove(4);
nums.inOrder(nums.root);
// console.log()
// nums.preOrder(nums.root);
// console.log()
// nums.postOrder(nums.root);
// console.log()
// console.log(nums.getMin());
// console.log(nums.getMax());

// 11 을 찾아보자.
console.log(nums.find(23));
// console.log(nums.find(112));