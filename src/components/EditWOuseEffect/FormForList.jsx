import { useState } from "react";

function FormForList({ getList, selectedEditItem }) {
  const dataInitial = { item: "", id: 0 };
  const [data, setData] = useState(dataInitial);
  const [editableData, setEditableData] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    if (selectedEditItem) {
    } else {
      getList(data);
    }
    setData(dataInitial);
  }

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(data);
  }

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="enter items"
          name="item"
          value={data.item}
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>submit</button>
      </form>
    </>
  );
}

export default FormForList;
