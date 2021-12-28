import React, { memo, useRef } from "react";
import styles from "./VideoSearch.module.css";

const VideoSearch = memo((props) => {
  const inputRef = useRef();

  const onLogoClick = () => {
    inputRef.current.value = "";
    props.onLogoClick();
  };

  const searchVideoList = () => {
    const keyword = inputRef.current.value;
    props.onSearch(keyword);
  };

  const onVideoClick = () => {
    searchVideoList();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") searchVideoList();
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={onLogoClick}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <span className={styles.title}>Youtube</span>
      </div>
      <input
        className={styles.input}
        ref={inputRef}
        type="search"
        placeholder="Input Search Keyword..."
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onVideoClick}>
        Search
      </button>
    </header>
  );
});

export default VideoSearch;
