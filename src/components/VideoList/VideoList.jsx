import React from "react";
import styles from "./VideoList.module.css";
import VideoItem from "../VideoItem/VideoItem";

const VideoList = ({ videos, onClick, display }) => {
  return (
    <ul className={styles.videos}>
      {videos.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          onClick={onClick}
          display={display}
        />
      ))}
    </ul>
  );
};

export default VideoList;
