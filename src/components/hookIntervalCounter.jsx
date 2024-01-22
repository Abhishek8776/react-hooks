import { useEffect, useState } from "react";

function HookIntervalCounter() {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1)
    }, 1000);
    return () => {
      clearInterval(interval)
    };
  }, [count]);
  return ( 
    <div>
      {count}
    </div>
   );
}

export default HookIntervalCounter;