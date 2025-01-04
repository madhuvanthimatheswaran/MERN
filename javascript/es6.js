//Arrow function
/*arrowfunc=(Departments)=>
{
    console.log(Departments);

}
arrowfunc(["IT","AIML","CSE"]);
*/
/*arrowfunc=(Departments)=>
{
    return Departments[1];
}
console.log(arrowfunc(['aiml,it,cse',"aiml,cse","it"]));
*/

// 3.Destructuring operator

/*var marks=[90,95,93]
var[m1,m2]=marks //m1,m2,m3 \\m1,m2,m3
console.log(m1,m2);//m1,m2,m3 \\ m1,m2
*/

//4.Ternary operator
/*
a=10;
out=(a%2==0)?"even":"odd"
console.log(a,"is",out);

*/
//5. Spread operator

/*arr1=[10,20,30]
arr2=[...arr1, 40, 50]
console.log(arr2);
*/
/*
arr1=[10,20,30]
arr2=[40,50,60]
//arr3=[...arr1,arr2]
arr3=[...arr1,...arr2]
console.log(arr3);
*/

//6.rest operator

//7.scope

/*var a=5
const pi=3.14
console.log("o",a);
console.log("o",pi);
{
    let a=10;//var a
    let b=10.5
    console.log("i",a);
    console.log("i",b);

}
console.log("o",a);//let=>5 //var=>10
console.log("o",pi);
*/

//8.hoisting
console.log(a)
let a=10
console.log(a)
//const ,let a===>
//ReferenceError: Cannot access 'a' before initialization
//var=>o/p:undefined,10