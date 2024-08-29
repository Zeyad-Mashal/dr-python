import React, { useState, useRef, useEffect } from "react";
import "./Lecture.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import vid1 from "./1.mp4";
import banner from "../../images/b2.jpg";

const Lecture = () => {
  const videos = [
    { id: 1, url: vid1 },
    { id: 2, url: vid1 },
    { id: 3, url: vid1 },
    { id: 4, url: vid1 },
    { id: 5, url: vid1 },
  ];

  const [model, setModel] = useState(false);
  const [videoURL, setVideoURL] = useState("");
  const videoRef = useRef(null);
  const flowInfoRef = useRef(null);

  const getVideo = (url) => {
    setVideoURL(url);
    setModel(true);
  };

  const handleFullscreenChange = () => {
    const isFullscreen =
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement;
    if (isFullscreen) {
      flowInfoRef.current.style.position = "fixed";
      flowInfoRef.current.style.zIndex = "2";
      flowInfoRef.current.style.top = "10px";
      flowInfoRef.current.style.left = "10px";
    } else {
      flowInfoRef.current.style.position = "absolute";
    }
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("msfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  const requestFullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.mozRequestFullScreen) {
      videoRef.current.mozRequestFullScreen();
    } else if (videoRef.current.msRequestFullscreen) {
      videoRef.current.msRequestFullscreen();
    }
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <div
          className="videoContainer"
          ref={videoRef}
          onClick={requestFullscreen}
        >
          <video src={videoURL} controls></video>
          <div ref={flowInfoRef} className="flow_info">
            <p>Zeyad Mashaal</p>
          </div>
        </div>
        <button onClick={() => setModel(false)}>إنهاء</button>
      </div>

      <section className="lecture">
        <div className="lecture_container">
          <div className="lecture_header">
            <img src={banner} alt="banner" />
          </div>
          <h2>Our Lecture</h2>

          {videos.map((file) => (
            <div className="lecture_content" key={file.id}>
              <div className="videoPlay">
                <video src={file.url} controls></video>
                <FontAwesomeIcon
                  icon={faPlay}
                  onClick={() => getVideo(file.url)}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Lecture;
