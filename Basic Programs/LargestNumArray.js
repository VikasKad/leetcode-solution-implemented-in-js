// function largestOfFour(arr) {
//     const finalArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         finalArr.push(Math.max(...arr[i]));
//     }
//     return finalArr;
// }
function largestOfFour(arr) {
    return arr.map((group) => {
        return group.reduce((total, currentValue) => {
            return Math.max(total, currentValue)
        }, 0)
    })
}
console.log(largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]));