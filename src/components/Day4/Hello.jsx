import React, { useEffect } from "react";

function Hello() {
  console.log("Component rendered");

  useEffect(() => {
    console.log("useEffect called");
  });

  return <h2>Hello Dharm sir 👋</h2>;
}

export default Hello;
