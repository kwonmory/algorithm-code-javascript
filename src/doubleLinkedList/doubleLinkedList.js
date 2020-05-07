function Node(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
}

function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.findPrevious = findPrevious;
    this.display = display;
}

function find(item) {
    let currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }

    return currNode;
}

function insert(newElement, item) {
    const newNode = new Node(newElement);
    const current = this.find(item);
    newNode.next = current.next;
    newNode.prev = current;
    current.next = newNode;
}

function findPrevious(item) {
    let currNode = this.head;
    while (!(currNode.next === null) && (currNode.next.element != item)) {
        currNode = currNode.next;
    }
    return currNode;
}

function remove(item) {
    let currNode = this.find(item);
    if (!(currNode.next === null)) {
        currNode.prev.next = currNode.next;
        currNode.next.prev = currNode.prev;
        currNode.next = null;
        currNode.prev = null;
    }
}

function display() {
    let currNode = this.head;
    while (!(currNode.next === null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;

    }
}

const cities = new LList();
cities.insert("Conway", "head");
cities.insert("Conway2", "Conway");
cities.insert("Conway3", "Conway2");
cities.remove("Conway");
cities.display();
