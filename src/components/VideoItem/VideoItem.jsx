import React, { memo } from "react";
import styles from "./VideoItem.module.css";

const VideoItem = memo((props) => {
  const displayType = props.display === "list" ? styles.list : styles.grid;

  return (
    <li
      className={`${styles.container} ${displayType}`}
      onClick={() => props.onClick(props.video)}
    >
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={props.video.snippet.thumbnails.default.url}
          alt="video thumbnails"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{props.video.snippet.title}</p>
          <p className={styles.channel}>{props.video.snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
});

export default VideoItem;
