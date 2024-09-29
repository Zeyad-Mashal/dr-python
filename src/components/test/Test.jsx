// src/VideoPlayer.js
import React, { useEffect, useRef, useState } from "react";
import "./Lecture.css"; // Import your CSS

const Test = () => {
  const playerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoId = "XqvrpzmEg9s?si=jEsYDTc5jl8HTxOq";
  useEffect(() => {
    const onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("player", {
        height: "315",
        width: "560",
        videoId: videoId,
        playerVars: {
          // autoplay: 1,
          // controls: 0,
          mute: 1,
        },
        events: {
          onReady: (event) => event.target.playVideo(),
        },
      });
    };

    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    } else {
      onYouTubeIframeAPIReady();
    }

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [videoId]);

  return (
    <div style={{ position: "relative" }}>
      <div id="player"></div>
      {isFullscreen && <div className="floating-username">Zeyad Ahmed</div>}
    </div>
  );
};

export default Test;
