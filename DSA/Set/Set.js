class MySet {
    collection = [];
    constructor() {
        this.collection = [];
    }
    size() {
        return this.collection.length;
    }
    /**
     *  Use indexOf(item) method to find whether its available or not
     */
    has(item) {
        return (this.collection.indexOf(item) !== -1);
    }
    values() {
        return this.collection;
    }
    /*
        Check whether current item is available or not if not then push into array
    */
    add(item) {
        if (!this.has(item)) {
            this.collection.push(item);
            return true;
        }
        return false;
    }
    /*
        Use splice method and remove 1 item from the array
    */
    remove(item) {
        if (this.has(item)) {
            const indexOfItem = this.collection.indexOf(item);
            this.collection.splice(indexOfItem, 1);
            return true;
        }
        return false;
    }
    /**
     * Create final Set Object using new keyword
     * get first and second sets values by using .values() method
     * push first and second set elements in final set using add method
     */
    union(secondSetInp) {
        const finalSet = new MySet();
        const firstSet = this.values();
        const secondSet = secondSetInp.values();
        firstSet.forEach(element => {
            finalSet.add(element);
        });
        secondSet.forEach((element) => {
            finalSet.add(element);
        });
        return finalSet;
    }
    /**
     * Find common in both 
     * Create finalSet variable using new variable
     * Get current set values
     * Traverse Current set and check whether item is available or not in second set then add
     */
    intersection(secondSet) {
        const finalSet = new MySet();
        const firstSet = this.values();
        firstSet.forEach((elem) => {
            if (secondSet.has(elem)) {
                finalSet.add(elem);
            }
        })
        return finalSet;
    }

    /**
     * Find NON common in both 
     * Create finalSet variable using new variable
     * Get current set values
     * Traverse Current set and check whether item is available or not in second set then add
     */
    difference(secondSet) {
        const finalSet = new MySet();
        const firstSet = this.values();
        firstSet.forEach((elem) => {
            if (!secondSet.has(elem)) {
                finalSet.add(elem);
            }
        });
        return finalSet;
    }
    /**
     *  this method will test if the set is a subset of a different set
     *  Get current Set values by values method
     *  travese with return method firstSet using every() method and then check 
     *  second set has it or not and return it.
     * 
     */
    subSet(secondSet) {
        const firstSet = this.values();
        return firstSet.every((elem) => {
            return secondSet.has(elem);
        })
    }
}
const setA = new MySet();
setA.add(4);
setA.add(1);
setA.add(2);
setA.add(3);
const setB = new MySet();
setB.add(3);
setB.add(4);
setB.add(5);
console.log('size', setA.size());
console.log('has', setA.has(3));
console.log('has', setA.has(8));
console.log('values', setA.values());
setA.remove(4);
console.log('Post remove', setA.values());
console.log('Union', setA.union(setB));
console.log('Intersection', setA.intersection(setB));
console.log('Difference', setA.difference(setB));
console.log('Subset', setA.subSet(setB));