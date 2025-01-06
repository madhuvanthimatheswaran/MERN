import React, { useEffect, useRef, useState } from "react";
import "./UseReftask.css"; 
const UseRefTask = () => {
  const [item, setItem] = useState(0);
  const previousItem = useRef(0);

  useEffect(() => {
    previousItem.current = item;
  });

  const handleIncrease = () => setItem((prev) => prev + 1);
  const handleDecrease = () => setItem((prev) => (prev > 0 ? prev - 1 : prev));

  return (
    <div>
      <h1>Current Render: {item}</h1>
      <h1>Previous Render: {previousItem.current}</h1>
      <div className="button-container">
        <button onClick={handleIncrease} className="small-btn">Increase</button>
      </div>
      <div className="button-container">
        <button onClick={handleDecrease} className="small-btn">Decrease</button>
      </div>
    </div>
  );
};

export default UseRefTask;
