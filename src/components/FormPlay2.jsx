function FormPlay2() {
  function handleOnSubmit(e) {
    e.preventDefault();
    // console.log(e);
  }

  function handleKeyDown(e) {
    // console.log(e);
    // e.preventDefault();
    if (e.keyCode === 13) {
      console.log(e.target.value);
    }
  }

  return (
    <form>
      <label>text here:</label>
      <input
        type="text"
        placeholder="write something"
        onKeyDown={handleKeyDown}
      ></input>
      <button type="submit" onClick={handleOnSubmit}>
        bang me
      </button>
    </form>
  );
}

export default FormPlay2;
