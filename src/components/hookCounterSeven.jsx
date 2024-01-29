import { useReducer } from "react";

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1
    case "decrement":
      return state - 1
    case "reset":
      return initialState
    default:
      return state
  }
}
function HookCounterSeven() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [counttwo, dispatchtwo] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        <div>count - {count}</div>
        <button onClick={() => dispatch("increment")}>increment</button>
        <button onClick={() => dispatch("decrement")}>decrement</button>
        <button onClick={() => dispatch("reset")}>reset</button>
      </div>
      <div>
        <div>count - {counttwo}</div>
        <button onClick={() => dispatchtwo("increment")}>increment</button>
        <button onClick={() => dispatchtwo("decrement")}>decrement</button>
        <button onClick={() => dispatchtwo("reset")}>reset</button>
      </div>
    </>
  );
}

export default HookCounterSeven;