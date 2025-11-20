import React from 'react'

const FruitsList = () => {
    const fruits = ["Apple", "Banana", "Mango", "Orange"];

    return (
    <div>
        <h1>Fruit List</h1>
        <ul>
            {fruits.map((fruit, index)=>(
                <li key={index}>{fruit}</li>
            ))}
        </ul>
    </div>
    )
}

export default FruitsList;


// 🧩 Explanation:

// map() loop karta hai array ke har item par.

// key prop unique honi chahiye (React ko diffing ke liye chahiye hoti hai).