import React from "react";
import styles from "./VideoList.module.css";
import VideoItem from "../VideoItem/VideoItem";

const VideoList = (props) => {
  return (
    <ul className={styles.videos}>
      {props.videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </ul>
  );
};

export default VideoList;
