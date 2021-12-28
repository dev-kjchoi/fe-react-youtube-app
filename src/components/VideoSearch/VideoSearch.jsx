import React, { useRef } from "react";
import styles from "./VideoSearch.module.css";

const VideoSearch = (props) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const keyword = inputRef.current.value;
    props.onSearch(keyword);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") handleSearch();
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
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
      <button className={styles.button} type="submit" onClick={onClick}>
        Search
      </button>
    </header>
  );
};

export default VideoSearch;
