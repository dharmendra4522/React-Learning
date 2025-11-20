import React, {useState} from 'react'

const Welcome = () => {
    const [login, setLogin] = useState(false);
    

  return (
    <div>
        
        <h2>{login ? "Welcome sir" : "Please do login"}</h2>
        <button onClick={()=>setLogin(!login)}>{login ? "Logout" : "Login"}</button>
        {login && <p>Secret Info: Your dashboard link</p>}
    </div>
  )
}

export default Welcome