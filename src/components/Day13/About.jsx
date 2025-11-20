import React from "react";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 bg-white shadow rounded">Item</div>
        <div className="p-4 bg-white shadow rounded">Item</div>
        <div className="p-4 bg-white shadow rounded">Item</div>
        <div className="p-4 bg-white shadow rounded">Item</div>
      </div>
    </div>
  );
};

export default About;
