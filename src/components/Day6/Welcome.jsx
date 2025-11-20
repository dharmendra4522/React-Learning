import React, { useState } from "react";

function Welcome() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <h2>{loggedIn ? "Welcome Dharm sir 👋" : "Please log in"}</h2>
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Welcome;


// 🧩 Explanation:

// loggedIn ? A : B → agar true hai to A chalega, warna B.

// Button toggle karta hai state ko.