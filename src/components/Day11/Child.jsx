import React from 'react'

export const Child = ({handleClick}) => {
    console.log("child rendered");
    
  return (
    <div>
        <h2>Child Component</h2>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}
