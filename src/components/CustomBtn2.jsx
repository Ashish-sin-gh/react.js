function CustomBtn2({ children, on2click, on1click }) {
  function handleDblClick() {
    on2click();
  }

  function handleClick() {
    on1click();
  }

  return (
    <button onDoubleClick={handleDblClick} onClick={handleClick}>
      {children}
    </button>
  );
}

export default CustomBtn2;
