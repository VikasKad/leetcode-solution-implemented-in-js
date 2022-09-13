let count=5;

/*
    1.   Square Star Pattern program
    
    *****
    *****
    *****
    *****
    *****
*/
const printSquareStar = (n) => {
    let str = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            str += "* ";
        }
        str += '\n';
    }
    return (str);
}
console.log(`--------1.   Square Star Pattern program----\n`)
console.log(printSquareStar(count));

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
                str += "* ";
            } else if (j === 0 || j === n - 1) {
                str += "* ";
            } else {
                str += "  ";
            }
        }
        str += '\n';
    }
    return (str);
}
console.log(`--------2. Hollow Square Pattern----\n`)
console.log(printSquarePattern(count));

/**
 * 3. Increasing Pattern 
    *
    *  *
    *  *  *
    *  *  *  *
    *  *  *  *  *

 */
 const increasingTriangle = (n) => {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            str += "* ";
        }
        str += '\n';
    }
    return(str);
}
console.log(`--------3. Increasing Pattern ----\n`)

console.log(increasingTriangle(count));

/**
 * 4. Decreasing Pattern
    
    *  *  *  *  *
    *  *  *  *
    *  *  *
    *  *  
    *  
    

 */
 const decreasingTriangle = (n) => {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for(let j=i;j<=n;j++){
            str+='* '
        }
        str += '\n';
    }
    return(str);
}
console.log(`--------4. Decreasing Pattern----\n`)

console.log(decreasingTriangle(count));

/**
 * 5. Right side increasing Triangle Pattern 
    *
   **
  ***
 ****
*****

 */
const printRightTriangle = (n) => {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= n; j++) {
            str += "  ";
        }
        for(let j=1;j<=i;j++){
            str+='* '
        }
        str += '\n';
    }
    return (str);
}
console.log(`-------6. Right side decreasing Triangle Pattern ----\n`)
console.log(printRightTriangle(count));

/**
 * 5. Right side decreasing Triangle Pattern 
    
    * * * * *
      * * * *
        * * *
          * *
            *
 */
const printRightDecreasingTriangle = (n) => {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            str += "  ";
        }
        for(let j=i;j<=n;j++){
            str+='* '
        }
        str += '\n';
    }
    return (str);
}
console.log(`-------5. Right side decreasing Triangle Pattern ----\n`)
console.log(printRightDecreasingTriangle(count));


/**
 * 6. Hill Pattern 
            *
           ***
          *****
         *******
        *********

 */
 const printHillPattern = (n) => {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= n; j++) {
            str += "  ";
        }
        for(let j=1;j<i;j++){
            str+='* '
        }

        for(let j=1;j<=i;j++){
            str+='* '
        }
        str += '\n';
    }
    return (str);
}
console.log(`-------6. Hill Pattern  ----\n`)
console.log(printHillPattern(count));


/**
 * 7. Reverse Hill Pattern 
        *********
         *******
          *****         
           ***
            *
 */
const printReverseHillPattern = (n) => {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            str += "  ";
        }
        for(let j=i;j<n;j++){
            str+='* '
        }

        for(let j=i;j<=n;j++){
            str+='* '
        }
        str += '\n';
    }
    return (str);
}
console.log(`-------7. Reverse Hill Pattern  ----\n`)
console.log(printReverseHillPattern(count));


/**
 * 8. Diamond  Pattern 
            *
           ***
          *****
         *******
        *********
        *********
         *******
          *****         
           ***
            *
 */
const printDiamondPattern = (n) => {
    let str = "";
    for(let i=1;i<n;i++){
        for(let j=i;j<=n;j++){
            str +="  ";
        }
        for(let j=1;j<i;j++){
            str +="* ";
        }

        for(let j=1;j<=i;j++){
            str +="* ";
        }
        str+='\n';
    }
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            str += "  ";
        }
        for(let j=i;j<n;j++){
            str+='* '
        }

        for(let j=i;j<=n;j++){
            str+='* '
        }
        str += '\n';
    }
    return (str);
}
console.log(`------- 8. Diamond  Pattern ----\n`)
console.log(printDiamondPattern(count));



/**
 * 9.   Hollow Triangle Pattern 
*
**
* *
*  *
*   *
******
   
 */
 const printHollow = (n) => {
    let str = "";
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            if(i===n){
                str+="* ";
            }else if(j===1 || j===i ){
                str+="* "
            }else{
                str+="  ";
            }
        }
        str+='\n';
    }
    return (str);
}
console.log(`------- 9.   Hollow Triangle Pattern ----\n`)
console.log(printHollow(count));
        

/**
 * 10.  Hollow Pyramid Star Pattern 
    *
   * *
  *   *
 *     *
*********
 */
 const printHollowPyramid = (n) => {
    let str = "";
    for(let i=1;i<=n;i++){
        for(let j=i;j<=n;j++){
            str+=" ";
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            if(i === 1 || i === n) {
                str += "*";
            }
            else {
              if(k === 0 || k === 2 * i - 2) {
                str += "*";
              }
              else {
                str += " ";
              }
            }
          }
          str += "\n";
        }
    return (str);
}
console.log(`------- 10.  Hollow Pyramid Star Pattern ----\n`)
console.log(printHollowPyramid(count));