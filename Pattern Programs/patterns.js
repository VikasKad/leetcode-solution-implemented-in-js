/*
    1.   Square Star Pattern program
    
    *****
    *****
    *****
    *****
    *****
*/
let n = 5;
const printSquareStar = (n) => {
    let str = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            str += "*";
        }
        str += '\n';
    }
    console.log(str);
}
// printSquareStar(5);

/**
 * 2. Hollow Square Pattern
 *****
 *   *
 *   *
 *   *
 *****
 */
const printSquarePattern = (n) => {
    let str = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || i === n - 1) {
                str += "*";
            } else if (j === 0 || j === n - 1) {
                str += "*";
            } else {
                str += " ";
            }
        }
        str += '\n';
    }
    console.log(str);
}
printSquarePattern(5);
