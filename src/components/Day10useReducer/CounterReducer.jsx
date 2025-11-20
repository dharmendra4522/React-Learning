import React, {useReducer} from 'react'
 //step 1: initial state
    const initialState = ({count: 0});
    //step 2: reducer function
    const reducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT": 
                return {count: state.count + 1};
            case "DECREMENT":
                return {count: state.count -1};
            case "RESET": 
                return {count: 0};
            default:
                return state;
        }
    };
const CounterReducer = () => {
    //step 3: useReducer hook (Dispatch function)
    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        <h1>UseReducer</h1>
        <h2>Count: {state.count}</h2>
        <button onClick={()=> dispatch({type: "INCREMENT"})}>
            Increase
        </button>
        <button onClick={()=> dispatch({type: "DECREMENT"})}>
            Increase
        </button>
        <button onClick={()=> dispatch({type: "RESET"})}>
            Increase
        </button>
    </div>
  )
}

export default CounterReducer