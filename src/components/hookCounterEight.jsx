import { useMemo, useState } from "react";

function HookCounterEight() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    console.log("rendering incrementOne")
    setCounterOne(counterOne + 1);
  }

  const incrementTwo = () => {
    console.log("rendering incrementingTwo")
    setCounterTwo(counterTwo + 1)
  }

  const isEven = useMemo(() => {
    console.log("rendering isEven");
    return counterOne % 2 === 0;
  }, [counterOne]);


  return ( 
    <div>
      <button onClick={incrementOne}>counter one - {counterOne}</button>
      <span>{isEven ? 'even' : 'odd'}</span>
      <button onClick={incrementTwo}>counter two - {counterTwo}</button>
    </div>
   );
}

export default HookCounterEight;