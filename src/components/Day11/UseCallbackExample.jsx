import React, { useState, useCallback } from "react";

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  },[count]) 
  return (
    <div>
      <h1>useCallback Example</h1>
      <button onClick={handleClick}>CLick</button>
      <p>{count}</p>
      <button onClick={() => setCount(count +1)}>Increase</button>
    </div>
  );
};

export default UseCallbackExample;
