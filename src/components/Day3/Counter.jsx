import React, { useState } from "react";

const Counter = () => {
  // Step 1: Declare state variable
  const [count, setCount] = useState(0);

  // Step 2: Function to update state
  const increase = () => setCount(count + 1);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increase}>Increase</button>
    </div>
  );
};

export default Counter;
