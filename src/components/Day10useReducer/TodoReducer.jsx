import React, { useState, useReducer } from "react";
const initialState = { tasks: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { tasks: [...state.tasks, action.payload] };

    case "REMOVE_TASK":
      return {
        tasks: state.tasks.filter((_, index) => index !== action.payload),
      };

    case "CLEAR_TASKS":
      return { tasks: [] };
    default:
      return state;
  }
};

const TodoReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [task, setTask] = useState("");
  return (
    <div>
      <h1>TodoReducer Component</h1>
      <input
        type="text"
        placeholder="Add Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <br /> <br />
      <button
        onClick={() => {
          dispatch({ type: "ADD_TASK", payload: task });
          setTask(""); 
        }}
      >
        Add Task
      </button>
      <button
        onClick={() => {
          dispatch({ type: "CLEAR_TASKS" });
        }}
        disabled={state.tasks.length === 0}
      >
        CLear ALl
      </button>
      <ul>
        {state.tasks.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button
              onClick={() => dispatch({ type: "REMOVE_TASK", payload: index })}
            >
              Delte
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoReducer;
