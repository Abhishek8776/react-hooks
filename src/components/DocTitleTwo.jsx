import { useEffect, useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

function DocTitleTwo() {
  const [count, setCount] = useState(0);
  useDocumentTitle(count)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>counter {count}</button>
    </div>
  );
}

export default DocTitleTwo;