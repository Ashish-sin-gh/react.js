import CustomButton from "./components/CustomButton.jsx";
import List from "./components/List.jsx";
import dataList from "./data/listData.js";
import EventFun from "./components/EventFun.jsx";
import CustomBtn2 from "./components/CustomBtn2.jsx";
import FormPlay from "./components/FormPlay.jsx";
import FormPlay2 from "./components/FormPlay2.jsx";
import HookUseState from "./components/HookUseState.jsx";
import Counter from "./components/Counter.jsx";
import Clock from "./components/Clock.jsx";
import Stopwatch from "./components/Stopwatch.jsx";
import AddUsingForm from "./components/AddUsingForm.jsx";
import { useState } from "react";
function App() {
  //lifting up state
  const [nameDetails, addNameDetails] = useState([]);
  function bringStateData(data) {
    console.log(data);
    addNameDetails([...nameDetails, data]);
  }

  return (
    <>
      <ol>
        {dataList.map((data) => (
          <List layout="number" item={data}></List>
        ))}
      </ol>
      <ol>
        {dataList.map((data) => (
          <List layout="alphabet" item={data}></List>
        ))}
      </ol>
      <ol>
        {dataList.map((data) => (
          <List item={data}></List>
        ))}
      </ol>

      <CustomButton onClick={() => console.log("love her")}>
        Ashish
      </CustomButton>
      <CustomButton onClick={() => alert("love him")}>mom</CustomButton>

      <p>______________________________________________________</p>

      <div>
        <EventFun></EventFun>
      </div>

      <p>______________________________________________________</p>

      <div>
        <CustomBtn2
          on2click={() => alert("knock knock")}
          on1click={() => console.log("knock")}
        >
          click me
        </CustomBtn2>
      </div>

      <p>______________________________________________________</p>

      <div>
        <FormPlay></FormPlay>
      </div>

      <div>
        <FormPlay2></FormPlay2>
      </div>

      <p>______________________________________________________</p>

      <HookUseState></HookUseState>

      <p>______________________________________________________</p>

      <Counter></Counter>

      <p>______________________________________________________</p>

      <Clock></Clock>
      <p>______________________________________________________</p>
      <h1>form, lifing up state</h1>
      <AddUsingForm data={bringStateData}></AddUsingForm>
      <div>
        {nameDetails.map((data) => (
          <h3>
            {data.fname} {data.lname}
          </h3>
        ))}
        <div></div>
      </div>
    </>
  );
}

export default App;
