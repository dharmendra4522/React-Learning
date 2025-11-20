import React, { useState } from 'react'

const AdvancedTodo = () => {
    const[task, setTask] = useState("");
    const[todos, setTodos] = useState([]);

    const handleAdd = () =>{
        if(task.trim() === "") return;
        setTodos([...todos, task]);
        setTask("");
    }  
    const handleDelete = (index) =>{
        const newTask = todos.filter((_,i) => i !== index);
        setTodos(newTask);
    }
    const handleClearAll = () =>{
        setTodos([]);
    }

  return (
    <div>
        <h1>Advanced Todo</h1>
        <input type="text" placeholder='Enter task' value={task} onChange={(e) =>setTask(e.target.value)}/>
        <br /><br />
        <button onClick={handleAdd}>Add</button>  &nbsp;
        <button onClick={handleClearAll} disabled={todos.length === 0}>Clear All</button>

        {todos.length > 0 ? (
            <ul>
                {todos.map((item, index)=>(
                    <li key={index}>
                        {item} {"  "}
                        <button onClick={()=>handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        ) : (
            <p>You have {todos.length} task(s) left</p>
        )}
    </div>
  )
}

export default AdvancedTodo