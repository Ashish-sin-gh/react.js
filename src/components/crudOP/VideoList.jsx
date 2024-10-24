import VideoDisplay from "./VideoDisplay";

function VideoList({ videos, deleteVideo, editVideo }) {
  return (
    <>
      {videos &&
        videos.map((el) => (
          <VideoDisplay
            key={el.id}
            video={el}
            deleteVideo={deleteVideo}
            editVideo={editVideo}
          />
        ))}
    </>
  );
}

export default VideoList;
