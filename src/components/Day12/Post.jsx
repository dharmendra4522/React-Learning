import React from 'react'
import useFetch from './useFetch'

const Post = () => {
    const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/posts");

    if(loading){
        return <h2>Loading....</h2>
    }
    if(error){
        return <h2>Error:{error}</h2>
    }
  return (
    <div>
        <h2>Post </h2>
        <ul>
            {data.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default Post