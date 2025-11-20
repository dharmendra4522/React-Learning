import React from 'react'

const TodoList = () => {
    const lists = ["Learn React", "Read Docs", "Practice Hooks"]
  return (
    <div>
        <h1>TodoList</h1>
        {lists.length > 0 ? (
            <ul>
                {lists.map((item, index) =>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
            ) : (
                <p>No tasks available</p>
            )
        }
        
    </div>
  )
}

export default TodoList