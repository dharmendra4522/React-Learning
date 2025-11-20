import React, { useState } from 'react'

const RegisterForm = () => {
    const [details, setDetails] = useState({
        name: "",
        email: ""
    });

    const handleChange =(e)=>{
        const { name, value } = e.target; 
        setDetails((prev) =>({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(details);
        
    }
    return (
    <div>
        <h1>Register Form</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name-input">Name: </label> 
            <input type="text" name='name' placeholder='Enter Name' onChange={handleChange} value={details.name}/>
            <br /><br />
            <label htmlFor="email-input">Email: </label> 
            <input type="email" name='email' placeholder='abc@example.com' onChange={handleChange} value={details.email}/>
            <br /><br />
            <button type='submit'>Submit</button>
        </form>
    </div>
    
    )
}

// export default RegisterForm


// 🧠 Here:

// [name]: value → dynamic key set karne ke liye use hota hai.

// Har input ke name attribute ke basis par value update hoti hai.