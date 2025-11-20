import React, {useCallback, useState} from 'react'
import { Child } from './Child';
const Parent = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("clicked");
        
    }, []);
  return (
    <div>
        <h1>Parent Component</h1>
        <p>Count: {count}</p>
        <button onClick={()=>setCount(count + 1)}>Increase</button>
        <Child handleClick={handleClick} />
    </div>
  )
}

export default Parent