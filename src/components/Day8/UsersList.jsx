import React, { useState, useEffect } from 'react'

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() =>{
        const fetchData = async () =>{
            try{
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                if(!res.ok){
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                setUsers(data);
                setError(false);

            } catch (error){
                setError(true);
            } 
            setLoading(false);
        }
        fetchData();
    }, [])
    if(loading){
        return <p>Loading.......</p>;
    }
    if(error){
        return <p>Error fetching data</p>;
    }

  return (
    <div>
        <h1>User List</h1>
        {users.map((users) =>(
            <li key={users.id}>
                <strong>{users.name}</strong> - {users.email}
            </li>
        ))}
        
    </div>
  )
}

export default UsersList


// ⭐ Samjho kya ho raha hai?
// | Step | Action                          | Result         |
// | ---- | ------------------------------- | -------------- |
// | 1    | Component load hota hai         | loading = true |
// | 2    | useEffect API ko call karta hai | wait karo      |
// | 3    | Data aata hai                   | users me store |
// | 4    | loading = false                 | UI update      |
// | 5    | Error aata hai (optional)       | error = true   |
