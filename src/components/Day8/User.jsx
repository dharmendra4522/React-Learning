import React, { useEffect, useState } from 'react'

const User = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    // useEffect(()=>{
    //     const getUser = async () => {
    //         const res = await fetch("https://jsonplaceholder.typicode.com/users");
    //         const data = await res.json();
    //         setUser(data);
    //     };

    //     getUser();
    // }, []);
    useEffect(() => {
        const fetchData = async () =>{
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                const json = await res.json();
                setUser(json);
            } catch (error) {
                setError(true);

            }
            setLoading(false);
        };
        fetchData();
    }, []);

  return (
    <div>
        <h1>Users List</h1>
        <ul style={{ listStyle: 'none' }}>
            {user.map((u) => (
                <li key={u.id}>{u.id}. &nbsp; {u.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default User;



// 🧩 Explanation

// useEffect(()=>{}, []) → runs only once when component loads.

// fetch() → API call

// setUsers(data) → data list state me store

// map() → UI me render