import React, { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type here" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default FocusInput;


// Explanation:

// inputRef.current = actual input HTML element

// .focus() se cursor input me aa jata hai