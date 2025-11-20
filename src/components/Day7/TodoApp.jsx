import React, { use, useState } from 'react'

const TodoApp = () => {
    const [task, setTask] = useState("");
    const [todo, setTodo] = useState([]);

    const handleAdd = () =>{
        if(task.trim() === "") return;
        setTodo([...todo, task]);
        setTask("");
    }

    const handleDelete =(index) =>{
        const newTask = todo.filter((_, i) => i !== index);
        setTodo(newTask);
    }

  return (
    <div>
        <h1>Todo List</h1>
        <input type="text" name="" placeholder='Enter Your Task' value={task} onChange={(e) => setTask(e.target.value)} />
        <br /><br />
        <button onClick={handleAdd}>Add</button>

        {todo.length > 0 ? (
            <ul>
                {todo.map((item, index) => (
                    <li key={index}>
                        {item}{"  "} 
                        &nbsp; &nbsp; 
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        ) :(
            <p>No Task Yet!</p>
        )}
    </div>
  );
};

export default TodoApp;



// ⚡ Key React Concepts Covered

// Controlled input field (via value and onChange)

// Array state management

// Updating state immutably ([...todos, task])

// Conditional rendering (show message when list empty)

// Using filter() for deletion logic