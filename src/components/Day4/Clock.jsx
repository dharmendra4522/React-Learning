import React, { useEffect, useState } from "react";

const Clock = () => {
  const [count, setCount] = useState(0);

  // function Hello() {
  //   console.log("hello Function");
  // }
  // Hello();
  useEffect(() => {
    console.log("useEffect run");
  }, [count]);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer running...");
    }, 1000);
    return () => {
      clearInterval(timer); // cleanup
      console.log("Timer stopped");
    };
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      {/* <h2>Timer: {timer}</h2> */}
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};

export default Clock;
