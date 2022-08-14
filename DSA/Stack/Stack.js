class Stack {
    arr = [];
    len = 0;
    constructor() {
        this.arr = [];
    }
    size() {
        return this.len;
    }
    push(data) {
        this.arr[this.len] = data;
        this.len++;
        return this.size;
    }
    pop() {
        if (this.len === 0) {
            return undefined;
        }
        this.len -= 1;
        const toBeDeletedValue = this.arr[this.len];
        delete this.arr[this.len];
        
        return toBeDeletedValue;
    }
    data() {
        return this.arr;
    }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log('Current array stack: ', stack.data());
stack.pop();
console.log('After deleting 1 items: ', stack.data());
console.log('After deleting 1 item length: ', stack.size());