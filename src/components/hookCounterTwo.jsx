import React from 'react';
import { useState } from 'react';

function HookCounterTwo() {
  const [count, setCount] = useState(0);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(count + 1)
    }
  }
  const incrementTen = () => {
    for (let i = 0; i < 10; i++) {
      setCount(prevCount => prevCount + 1)
    }
  }
  return (
    <div>
      count {count}
      <button onClick={() => { setCount(0) }}>reset</button>
      <button onClick={() => { setCount(count + 1)}}>increment</button>
      <button onClick={() => { setCount(count - 1) }}>decrement</button>
      <button onClick={incrementFive}>increment 5</button>
      <button onClick={incrementTen}>increment 10</button>

    </div>
  );
}

export default HookCounterTwo;
