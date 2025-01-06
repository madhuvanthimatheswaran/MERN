import { useState } from 'react';
import './Gallery.css'; 

var Gallery = () => {
    var [counter, setCount] = useState(0);

    function increment() {
        setCount(counter + 1);
    }

    function decrement() {
        if (counter > 0) {
            setCount(counter - 1);
        }
    }

    function reset() {
        setCount(0);
    }

    return (
        <section>
            <h3>THIS IS GALLERY PAGE</h3>
            <h2 style={{ textAlign: "center" }}>Learning state concept</h2>
            <h2>The state of my variable counter is {counter}</h2>
            <button onClick={increment} className="btn btn-increment">Increment</button>
            <button 
                onClick={decrement} 
                disabled={counter === 0} 
                className={`btn btn-decrement ${counter === 0 ? 'disabled' : ''}`}
            >
                Decrement
            </button>
            <button onClick={reset} className="btn btn-reset">Reset</button>
        </section>
    );
}

export default Gallery;
