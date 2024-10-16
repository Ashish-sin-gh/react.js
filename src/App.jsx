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
function App() {
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
      <br></br>
      <div>
        <EventFun></EventFun>
      </div>
      <br></br>
      <div>
        <CustomBtn2
          on2click={() => alert("knock knock")}
          on1click={() => console.log("knock")}
        >
          click me
        </CustomBtn2>
      </div>
      <br></br>
      <div>
        <FormPlay></FormPlay>
      </div>

      <br></br>

      <div>
        <FormPlay2></FormPlay2>
      </div>

      <br></br>

      <HookUseState></HookUseState>

      <br></br>

      <Counter></Counter>

      <br></br>

      <Clock></Clock>

      <br></br>

      <AddUsingForm></AddUsingForm>
    </>
  );
}

export default App;
