// Proc
const factorialize = (num) => {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}
// Recursive
const factorialize = (num) => {
    if (num === 0) {
        return 1;
    }
    return num * factorialize(num - 1);
}

console.log(factorialize(5));
console.log(factorialize(20));