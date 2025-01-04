import {useState} from 'react';
var Gallery=()=>{
    var [counter,setCount]=useState(0);
    function increment(){
        setCount(counter+1);
    }
    function decrement(){
        setCount(counter-1);
    }
    function reset(){
        setCount(0);
    }
    return(
        <section>
            <h3>THIS IS GALLERY PAGE</h3>
            <h2 style={{textAlign:"center"}}>Learning state concept</h2>
            <h2>The state of my variable counter is {counter}</h2>
            <button onClick={increment}> Click me to Increment</button>
            <button onClick={decrement}> Click me to Decrement</button>
            <button onClick={reset}>Click me to Reset</button>
            
        </section>
    );
}
export default Gallery;