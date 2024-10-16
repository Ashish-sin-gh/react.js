import { useState } from "react";

function HookUseState() {
  const [showImg, setshowImg] = useState(true);

  function handleOnClick() {
    setshowImg(!showImg);
    console.log(showImg);
  }

  return (
    <>
      <button onClick={handleOnClick}>{showImg ? "hide" : "show"} image</button>
      <div>
        {showImg ? (
          <img src="https://loremflickr.com/120/120" alt="cat"></img>
        ) : null}
      </div>
    </>
  );
}

export default HookUseState;
