import { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(new Date());
  const timer = time.getSeconds();

  function handleStart() {
    useEffect(() => {
      const initialTimer = setInterval(() => {
        setTime(new Date());
      }, 1000);
    }, []);
  }

  function handlePause() {}

  function handleStop() {}
  const formate = time.toTimeString();
  // console.log(formate.split(" ")[0]);
  return (
    <>
      <button onClickStart={handleStart}>start</button>
      <button onClickPause={handlePause}>pause</button>
      <button onClickStop={handleStop}>stop</button>

      <h1>timer: {formate.split(" ")[0]}</h1>
      <h1>elpased time: {}</h1>
    </>
  );
}

export default Stopwatch;
