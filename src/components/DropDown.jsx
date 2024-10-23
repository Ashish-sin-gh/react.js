import { useState } from "react";

function DropDown({ data }) {
  const [countryData, setCountryData] = useState({});
  function handleChange(e) {
    setCountryData({ ...countryData, [e.target.name]: e.target.value });
    // console.log(countryData);
  }

  function handleClick(e) {
    e.preventDefault();
    data(countryData);
  }

  return (
    <form>
      <input
        type="text"
        onChange={handleChange}
        name="country"
        placeholder="country name"
      ></input>
      <input
        type="text"
        onChange={handleChange}
        name="code"
        placeholder="country code"
      ></input>
      <button onClick={handleClick}>submit data</button>
    </form>
  );
}

export default DropDown;
