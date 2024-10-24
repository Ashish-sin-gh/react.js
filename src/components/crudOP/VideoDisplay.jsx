function VideoDisplay({ gender = "boy", video, deleteVideo, editVideo }) {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", width: "100wv" }}>
        <div
          style={{
            border: "2px solid black",
            width: "30%",
            height: "20%",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            alignItems: "center",
            margin: "5px",
            padding: "5px",
            position: "relative",
          }}
        >
          <button
            style={{ position: "absolute", right: "2px" }}
            onClick={() => deleteVideo(video.id)}
          >
            X
          </button>
          <button
            style={{ position: "absolute", right: "30px" }}
            onClick={() => editVideo(video.id)}
          >
            edit
          </button>
          <img
            src={`https://avatar.iran.liara.run/public/${gender}`}
            alt={gender === "male" ? "boy" : "girl"}
            style={{
              height: "40%",
              width: "50%",
              padding: "5px",
            }}
          ></img>
          <p>{video.title} </p>
          <p>{video.creator} </p>
        </div>
      </div>
    </>
  );
}

export default VideoDisplay;
