import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncClick() {
    setCount(count + 1);
  }

  function handleDecClick() {
    if (count > 0) setCount(count - 1);
  }

  return (
    <>
      <h1>counter: {count}</h1>
      <button onClick={handleIncClick}>increase</button>
      <button onClick={handleDecClick}>decrease</button>
    </>
  );
}

export default Counter;
