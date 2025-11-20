import React, {useState, useMemo} from 'react'

const ExpensiveCalculation = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(5);
    const factorial = (num) =>{
        console.log("Heavy Calculation...");
        if(num <= 0 ) return 1;
        return num * factorial(num - 1);
    };
    const memorizedValue = useMemo(() => factorial(number), [number]);
  return (
    <div>
        <h1>Memo Example</h1>
        <h2>Expensive Calculation Component</h2>
        <p>Factorial: {memorizedValue}</p>
        <button onClick={()=>setNumber(number+1)}>Increase Number</button>
        <button onClick={()=> setCount(count+1)}>Decrease count ({count})</button>

    </div>
  )
}

export default ExpensiveCalculation