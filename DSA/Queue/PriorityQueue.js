class MyPriorityQueue {
    collection = [];
    constructor() {

    }
    print() {
        return this.collection;
    }
    enqueue(item) {
        if (this.collection.length === 0) {
            this.collection.push(item);
            return true;
        } else {
            let isAdded = false;
            for (let i = 0; i < this.collection.length; i++) {
                if (item[1] < this.collection[i][1]) {
                    this.collection.splice(i, 0, item);
                    isAdded = true;
                    break;
                }
            }
            if (!isAdded) {
                this.collection.push(item);
            }
        }
    }
    dequeue(){
        const value = this.collection.shift();
        return value[0];
    }
    front = function() {
        return this.collection[0];
    };
    size = function() {
        return this.collection.length; 
    };
    isEmpty = function() {
        return (this.collection.length === 0); 
    };
}

var pq = new MyPriorityQueue(); 
pq.enqueue(['Beau Carnes', 2]); 
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Ewa Mitulska-Wójcik', 1])
pq.enqueue(['Briana Swift', 2])
console.log(pq.print());
pq.dequeue();
console.log(pq.front());
console.log(pq.print());