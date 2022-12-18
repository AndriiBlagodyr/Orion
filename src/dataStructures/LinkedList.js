class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length += 1;
        return this;
    }
    pop() {
        if (this.length <= 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return undefined;
        }
        let current = this.head;
        let newTail = this.head;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        newTail.next = null;
        this.tail = newTail;
        this.length -= 1;
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length -= 1;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
            this.length = 1;
            return this;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length += 1;
        return this;
    }

    get(index) {
        if (index < 0 || index > this.length - 1) {
            return undefined;
        }
        let counter = 0;
        let current = this.head;
        while (counter < index) {
            current = current.next;
            ++counter;
        }
        return current;
    }

    set(index, value) {
        const node = this.get(index);
        if (node) {
            node.val = value;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);
        const newNode = new Node(val);
        const prev = get(index - 1);
        const temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length - 1) return false;
        if (index === 0) return this.shift(val);
        if (index === this.length - 1) return this.pop(val);
        const prewNode = this.get(index - 1);
        const removed = prewNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }

    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let current = node;
        let prev = null;
        let next = null;
        for (let i = 0; i < this.length; i++) {
            console.log('Iteration', i);
            next = current.next;
            console.log('next = current.next', next);
            current.next = prev;
            console.log('current.next = prev', current.next);
            prev = current;
            console.log('prev = current', prev);
            current = next;
            console.log('current = next', current);
        }
        return this;
    }

    print() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}

const myList = new LinkedList();
myList.push(8);
myList.push(10);
myList.push(15);
myList.push(20);
myList.print();
myList.reverse();
myList.print();
