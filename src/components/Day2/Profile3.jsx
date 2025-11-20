import React from "react";

export const Profile3 = ({ name, skills }) => {
  return (
    <div>
      <h2>{name}'s Skills:</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};
