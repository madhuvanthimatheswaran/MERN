async function funName(){
    setTimeout(()=>{
        console.log("Hello");
    },5000)
    console.log(await "Hello")
}

arrowFunName=async()=>{
    setTimeout(()=>{
        console.log("KEC");
    },4000)
    console.log(await "KEC")
}
funName()
arrowFunName()