import { useState } from "react";
import useCounter from "./useCounter";

function HookCounterTen() {
  const [count, increment, decrement, reset] = useCounter(10,2)

  return (
    <div>
      <h2>Count - {count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default HookCounterTen;