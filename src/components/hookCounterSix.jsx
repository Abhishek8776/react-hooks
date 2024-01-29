import { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondcounter : 10
}
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter : state.firstCounter + action.value}
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value }
    case "increment2":
      return { ...state,secondcounter: state.secondcounter + action.value }
    case "decrement2":
      return { ...state, secondcounter: state.secondcounter - action.value }
    case "reset":
      return initialState
    default:
      return state
  }
}
function HookCounterSix() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>first counter - {count.firstCounter}</div>
      <div>second counter - {count.secondcounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>decrement</button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>increment 5</button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>decrement 5</button>
      <button onClick={() => dispatch({ type: "increment2", value: 1 })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>decrement</button>
      <button onClick={() => dispatch({type : "reset"})}>reset</button>
    </div>
  );
}

export default HookCounterSix;