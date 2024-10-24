import { useState } from "react";

function AddDataForm({ data }) {
  const [PDetails, setPDetails] = useState({});

  function handleClick(e) {
    e.preventDefault();
    data(PDetails);
    console.log(PDetails);
  }

  function handleChange(e) {
    // console.log(e);
    setPDetails({ ...PDetails, [e.target.name]: e.target.value });
    // console.log(PDetails);
  }

  return (
    <>
      <h1>more pactice form and lifing state up</h1>
      <form>
        <input
          type="text"
          placeholder="full-name"
          name="Pname"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="phone-number"
          name="phoneNo"
          onChange={handleChange}
        />
        <button onClick={handleClick}>submit</button>
      </form>
    </>
  );
}

export default AddDataForm;
