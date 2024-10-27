function Display({ list }) {
  function handleEdit() {
    getItemToUpdate(list.id);
  }

  // console.log(list[0].item);
  return (
    <ul>
      {list &&
        list.map((el) => (
          <>
            <li>{el.item}</li>
            <button onClick={handleEdit}>edit</button>
          </>
        ))}
    </ul>
  );
}

export default Display;
