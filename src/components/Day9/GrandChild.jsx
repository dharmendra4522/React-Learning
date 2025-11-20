import React, { useContext } from 'react'
import { UseContext } from '../../UserContext'

const GrandChild = () => {
    const user = useContext(UseContext);
    
  return (
    <div>
        <h1>Grand Child Component</h1>
        <p>User Name: {user}</p>

    </div>
  )
}

export default GrandChild