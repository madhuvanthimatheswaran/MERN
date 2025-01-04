//write a code to find whether the given number is odd or even 
//without using modulo operator
function isEven(number) {
   
    if ((number & 1) === 0) {
        return true;  
    } else {
        return false; 
    }
}

console.log(isEven(4));  
console.log(isEven(7));  
