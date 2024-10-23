function DropDownDisplay({ data }) {
  return (
    <select
      name="country"
      onChange={(e) => {
        console.log(
          data[data.findIndex((nation) => nation.country === e.target.value)]
            .code
        );
        // console.log(e.target.value);
      }}
    >
      {data.map((info) => (
        <option value={info.country}>{info.country}</option>
      ))}
    </select>
  );
}

export default DropDownDisplay;
