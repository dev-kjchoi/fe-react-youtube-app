import { useEffect, useState } from "react";
import styles from "./App.module.css";
import VideoList from "./components/VideoList/VideoList";
import VideoSearch from "./components/VideoSearch/VideoSearch";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const handleSearch = (keyword) => {
    youtube
      .search(keyword) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <VideoSearch onSearch={handleSearch} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
