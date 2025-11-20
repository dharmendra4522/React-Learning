import React from 'react'
import useFetch from './useFetch'

export const Users = () => {
    const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/users");
    
    if(loading){
        return <h2>Loading....</h2>
    }
    if(error){
        return <h2>Error:{error}</h2>
    }


  return (
    <div>
        <h2>Users List</h2> 
        <ul>
            {data.map(user => (
                <li key={user.id}>{user.name} - {user.email}</li>
            ))}
        </ul>
    </div>
  )
}
