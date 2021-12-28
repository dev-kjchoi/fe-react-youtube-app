import { useCallback, useEffect, useState } from "react";
import styles from "./App.module.css";
import VideoDetail from "./components/VideoDetail/VideoDetail";
import VideoList from "./components/VideoList/VideoList";
import VideoSearch from "./components/VideoSearch/VideoSearch";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const searchVideoList = useCallback(
    (keyword) => {
      setSelectedVideo(null);
      youtube
        .search(keyword) //
        .then((videos) => setVideos(videos));
    },
    [youtube]
  );

  const searchMostPopularList = useCallback(() => {
    setSelectedVideo(null);
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <VideoSearch
        onLogoClick={searchMostPopularList}
        onSearch={searchVideoList}
      />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
