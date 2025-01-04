import React, { useEffect, useRef, useState } from "react";

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
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};

export default UseRefTask;
