class MyQueue {
    collection = [];
    constructor() {
        this.collection = [];
    }
    print() {
        return this.collection;
    }
    enqueue(item) {
        this.collection.push(item);
        return true;
    }
    dequeue() {
        return this.collection.shift();
    }
    front() {
        return this.collection[0];
    }
    size() {
        return this.collection.length;
    }
    isEmpty() {
        return this.collection.length ? true : false;
    }
}

const q = new MyQueue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
console.log(q.print());
q.dequeue();
console.log(q.front());
console.log(q.print());