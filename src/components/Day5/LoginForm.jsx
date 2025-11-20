import React, { useState } from 'react'

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Email: ", email);
        console.log("Password: ", password);
        
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login Form</h2>
            <label>Email: </label> &nbsp; &nbsp; &nbsp; &nbsp; 
            <input type="email" placeholder='Enter Your Email' value={email} onChange={(e)=> setEmail(e.target.value)}/> <br /><br />
            <label>Password: </label>
            <input type="password" placeholder='abc@#2134' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <br /><br />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default LoginForm;


// 🧠 Key Notes:

// onSubmit event trigger hota hai jab form submit hota hai.

// e.preventDefault() → page reload hone se rokta hai (React me manual handling karte hain).

// State me data store karne se input hamesha controlled rehta hai.