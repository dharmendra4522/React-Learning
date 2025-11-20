import React, { useState } from 'react'

const FeedbackForm = () => {

    const [data, setData] = useState({
        name:"",
        email:"",
        message:""
    });
    const [thank, setThanks] = useState(false);
    const handleInput =(e)=>{
        const {name, value} = e.target;
        setData((prev) =>({
            ...prev,
            [name]: value,
        }));
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(data);
        setThanks(true)
    }

  return (
    <div>
        
        <h1>Feedback Form</h1>
        <h2>{thank? <p>Thanks for your feedback {data.name}!</p>:" "}</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name-input">Name:</label>
            <br />
            <input type="text" id="name-input" name='name' placeholder='Enter Your name' onChange={handleInput} value={data.name}/>
            <br />
            <label htmlFor="email-input">Email:</label>
            <br />
            <input type="email" id="email-input" name='email' placeholder='abc@gmail.com' onChange={handleInput} value={data.email}/>
            <br />
            <label htmlFor="message-input">Message:</label>
            <br />
            <textarea
                id="message-input" name='message'
                placeholder="Write Your Message"
                onChange={handleInput}
                value={data.message}
            />
            <br /> <br />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default FeedbackForm