import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());
  // console.log("rendering Clock");

  useEffect(() => {
    //change time every second
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); //cleanup function when component is unmounted
  }, []);

  const dateDisplay = time.toDateString();
  const timeDisplay = time.toTimeString();

  return (
    <>
      <h1>{dateDisplay}</h1>
      <h2>{timeDisplay}</h2>
      <button>stop time</button>
    </>
  );
}

export default Clock;
