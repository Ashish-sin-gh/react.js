import "./eventFun.css";
let className = "normal";
function EventFun() {
  function handleMouseOver(e) {
    // e.stopPropagation();
    e.target.className = "small"; // if u will do className = "small", it wont work as it wont cause re-render. yet this will modify the varible
    //react need state change to render a component
    console.log("small");
  }

  function handleMouseOut(e) {
    // e.stopPropagation();
    e.target.className = "normal";
    console.log("normal");
  }

  return (
    <>
      <img
        src="https://fakeimg.pl/1280x720"
        alt="placeholder"
        className="normal"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      ></img>
    </>
  );
}

export default EventFun;
