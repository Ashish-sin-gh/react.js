function CustomButton({ children, message = "love u", onClick }) {
  function handleClick() {
    onClick();
  }

  return <button onClick={handleClick}>{children}</button>;
}

export default CustomButton;
