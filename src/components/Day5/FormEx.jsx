import React, { useState } from 'react'

const FormEx = () => {
    const [name, setName] = useState("");

    const handleInput =(e)=>{
        setName(e.target.value)
    }
  return (
    <div>
        <h2>Welcome {name || "Guest"}</h2>
        <input type="text" placeholder='Enter Name' value={name}  onChange={handleInput}/>
    </div>
  )
}

export default FormEx;


// 🧩 Explanation:

// value={name} → input ka value React state se linked hai.

// onChange={handleChange} → jab user type karta hai, event trigger hota hai.

// event.target.value se input ka current value milta hai.

// setName() se wo React state me store ho jata hai.

// Result:
// Jo aap input me likhoge, wo instantly screen par reflect hoga (state-driven UI).