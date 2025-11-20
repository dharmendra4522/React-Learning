import React, { useState } from "react";

function ToggleText() {
  const [show, setShow] = useState(true);

  return (
    <div>
      {show ? <p>Hello Dharm sir!</p> : <p>Text Hidden</p>}
      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  );
}

export default ToggleText;
