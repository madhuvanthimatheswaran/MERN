//array=[10,20,30,40,50,"a","KEC",true]
//console.log(array);

//1. for...in loop 
//for(var a in array){
  //  console.log("Element present in index",a);
//}

//2.for...of loop
//for(var b of array){
  //  console.log(b);
//}
//foreach
//Example 1
//array=[10,20,30,40,50,"a","KEC",true]
//array.forEach((element,index)=>{
  //  console.log("Element present in index",index,"is",element);
//})

//Example 2
objtype1={
    "first name" : "Madhuvanthi",
   "last name" : "matheswaran",
    "age" : 20
}
console.log(objtype1);
for(key in objtype1){
    value=objtype1[key]
    console.log(key,value)
}
    

