import { useState } from "react";

function AddUsingForm({ data }) {
  const intialState = { fname: "", lname: "" };
  const [name, setName] = useState(intialState);

  function handleChange(e) {
    setName({ ...name, [e.target.name]: e.target.value });
    // console.log(name);
  }

  function handleSubmit(e) {
    e.preventDefault();
    data(name);
    setName(intialState);
  }

  return (
    <form>
      <input
        type="text"
        name="fname"
        placeholder="first name"
        value={name.fname}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="lname"
        placeholder="last name"
        value={name.lname}
        onChange={handleChange}
      ></input>
      <button onClick={handleSubmit}>click me for submitting the form</button>
    </form>
  );
}

export default AddUsingForm;
