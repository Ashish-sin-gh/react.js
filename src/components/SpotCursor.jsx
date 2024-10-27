import { useState } from "react";

function SpotCursor() {
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  const [positon, setPositon] = useState({ x: 0, y: 0 });
  function handlePointerMove(e) {
    console.log(e);
    // setX(e.clientX);
    // setY(e.clientY);
    setPositon({ x: e.clientX, y: e.clientY });
  }

  return (
    <>
      <div
        style={{
          width: "500px",
          height: "200px",
          border: "2px solid black",
          position: "relative",
          cursor: "none",
        }}
        onPointerMove={handlePointerMove}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "red",
            padding: 2,
            borderRadius: "50%",
            width: "5px",
            height: "5px",
            transform: `translate(${positon.x}px,${positon.y}px)`,
            left: -13,
            bottom: "240%",
          }}
        ></div>
      </div>
    </>
  );
}

export default SpotCursor;
