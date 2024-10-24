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
import DropDown from "./components/DropDown.jsx";
import DropDownDisplay from "./DropDownDisplay.jsx";
import AddDataForm from "./components/addDataForm.jsx";
import personalData from "./data/personalDetailsDB.js";
import VideoForm from "./components/crudOP/VideoForm.jsx";
import VideoList from "./components/crudOP/VideoList.jsx";

function App() {
  //lifting up state
  const [nameDetails, addNameDetails] = useState([]);
  function bringStateData(data) {
    addNameDetails([...nameDetails, data]);
  }

  const [countrydata, setCountryData] = useState([]);
  function recivedCountryData(data) {
    setCountryData([...countrydata, data]);
    console.log(countrydata);
  }

  const [personalDetials, setPersonalDetails] = useState(personalData);
  function personalDetailsDB(data) {
    setPersonalDetails([...personalDetials, data]);
    console.log(personalDetials);
  }

  const [videoAdd, setVideoAdd] = useState([]);
  const [editableVideo, setEditableVideo] = useState(null);
  function VideoAddition(data) {
    setVideoAdd([...videoAdd, { ...data, id: videoAdd.length + 1 }]);
  }
  function deleteVideo(matchData) {
    console.log(matchData);
    const newVideoArray = videoAdd.filter((el) => el.id !== matchData);
    setVideoAdd(newVideoArray);
  }
  function editVideo(data) {
    const selectedVideo = videoAdd.find((el) => el.id === data);
    // console.log(selectedVideo);
    setEditableVideo(selectedVideo);
    // console.log(editableVideo);
  }

  function updateVideo(data) {
    const newVideosList = [...videoAdd];
    const index = videoAdd.findIndex((video) => video.id === data.id);
    newVideosList.splice(index, 1, data);
    setVideoAdd(newVideosList);
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
      </div>

      <p>______________________________________________________</p>

      <DropDown data={recivedCountryData}></DropDown>
      <DropDownDisplay data={countrydata}></DropDownDisplay>

      <p>______________________________________________________</p>

      <AddDataForm data={personalDetailsDB}></AddDataForm>
      {personalDetials.map((el) => (
        <div>
          <br></br>
          <span>
            {el.Pname} {el.phoneNo}
          </span>
        </div>
      ))}

      <p>______________________________________________________</p>
      <h1>VIDEO CRUD</h1>
      <VideoForm
        VideoAddition={VideoAddition}
        editableVideo={editableVideo}
        updateVideo={updateVideo}
      ></VideoForm>
      <VideoList
        videos={videoAdd}
        deleteVideo={deleteVideo}
        editVideo={editVideo}
      ></VideoList>
    </>
  );
}

export default App;
