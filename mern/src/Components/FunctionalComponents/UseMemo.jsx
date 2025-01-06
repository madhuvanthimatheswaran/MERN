import { useMemo, useState } from "react";

const slowFunction = (number) => {
  for (let i = 0; i < 100000000; i++) {} // Simulates a time-consuming task
  return number * 2;
};

const UseMemo = () => {
  const [num, setNum] = useState(0);
  const [theme, updateTheme] = useState(true);

  const darkLight = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };

  const doublingANumber = useMemo(() => {
    return slowFunction(num);
  }, [num]);

  return (
    <section>
      <h2>This is a UseMemo Example</h2>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
      />
      <button
        onClick={() => updateTheme(!theme)}
        style={{
          width: "80px", // Set smaller width
          padding: "5px 0", // Decreased padding to make it shorter
          fontSize: "12px",
          marginTop: "10px",
        }}
      >
        Toggle Theme
      </button>
      <h2 style={darkLight}>{doublingANumber}</h2>
    </section>
  );
};

export default UseMemo;
