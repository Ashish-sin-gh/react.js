import { useState } from "react";

function AddUsingForm() {
  const [add, setAdd] = useState({});

  function handleChange(e) {
    setAdd({ ...add, [e.target.name]: e.target.value });
    // console.log(e.target.name, e.target.value);
    // console.log(add);
  }

  function handleClick(e) {
    e.preventDefault();
    // console.log(add);
  }

  return (
    <form>
      <input
        type="text"
        placeholder="first-Name"
        name="fname"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="last-Name"
        name="lname"
        onChange={handleChange}
      />
      <button onClick={handleClick}>click me!!!</button>
    </form>
  );
}

export default AddUsingForm;
