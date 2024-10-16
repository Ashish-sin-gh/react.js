function FormPlay() {
  function handleOnBlur() {
    console.log("out");
  }

  function handleOnFocus() {
    console.log("in");
  }
  return (
    <form>
      <input
        type="text"
        placeholder="enter some txt"
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
      ></input>
    </form>
  );
}

export default FormPlay;
