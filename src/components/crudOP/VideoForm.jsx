import { useEffect, useState } from "react";

function VideoForm({ VideoAddition, editableVideo, updateVideo }) {
  const intialValOfVideo = { title: "", creator: "", id: 0 };
  const [videoObj, setVideoObj] = useState(intialValOfVideo);

  function handleChange(e) {
    setVideoObj({ ...videoObj, [e.target.name]: e.target.value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (editableVideo) {
      updateVideo(videoObj);
    } else {
      VideoAddition(videoObj);
    }
    setVideoObj(intialValOfVideo);
  }

  useEffect(() => {
    if (editableVideo) {
      setVideoObj(editableVideo);
    }
  }, [editableVideo]);

  return (
    <>
      <form>
        <input
          placeholder="title"
          name="title"
          value={videoObj.title}
          onChange={handleChange}
        />
        <input
          placeholder="creator"
          name="creator"
          value={videoObj.creator}
          onChange={handleChange}
        />

        <button onClick={handleFormSubmit}>
          {editableVideo ? "update" : "add"} video
        </button>
      </form>
    </>
  );
}

export default VideoForm;
