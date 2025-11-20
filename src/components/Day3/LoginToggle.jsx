import React, { useState } from "react";

const LoginToggle = () => {
  const [login, setLogin] = useState(true);
  return (
    <div>
      <div>
        {login ? <p>Welcome Dharm sir</p> : <p>Please login to continue</p>}
      </div>
      <button onClick={() => setLogin(!login)}>Toggle</button>
    </div>
  );
};

export default LoginToggle;
