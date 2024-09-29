import React, { useState, useRef, useEffect } from "react";
import "./Lecture.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import vid1 from "./1.mp4";
import banner from "../../images/b2.jpg";
import pdfFile from "./pdf.pdf";
import LecturesDetailsAPI from "../../api/Lectures/LecturesDetailsAPI";
import Subjects from "../Subjects/Subjects";
import { useParams } from "react-router-dom";
const Lecture = () => {
  useEffect(() => {
    lectureDetailsApi();
  }, []);
  const { subjectId, lectureId } = useParams();
  const videos = [
    { id: 1, url: "https://www.youtube.com/embed/XqvrpzmEg9s" },
    { id: 2, url: "https://www.youtube.com/embed/XqvrpzmEg9s" },
    { id: 3, url: "https://www.youtube.com/embed/XqvrpzmEg9s" },
    { id: 4, url: "https://www.youtube.com/embed/XqvrpzmEg9s" },
    { id: 5, url: "https://www.youtube.com/embed/XqvrpzmEg9s" },
  ];

  const [model, setModel] = useState(false);
  const [videoURL, setVideoURL] = useState("");
  const [lectureDetails, setLectureDetails] = useState();
  const [error, setError] = useState("");
  const [getLoading, setGetLoading] = useState(false);
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
  const lectureDetailsApi = () => {
    LecturesDetailsAPI(
      setError,
      setGetLoading,
      setLectureDetails,
      subjectId,
      lectureId
    );
  };
  const getEmbedUrl = (baseUrl) => {
    const match = baseUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    return null; // return null if the URL format is invalid
  };

  // Example usage
  const baseUrl =
    "https://drive.google.com/file/d/19NGhr40RpqaIUCwlcgtsMK0rmnm2vw51/view?usp=drive_link";
  const embedUrl = getEmbedUrl(baseUrl);

  console.log(embedUrl); // Outputs: https://drive.google.com/file/d/19NGhr40RpqaIUCwlcgtsMK0rmnm2vw51/preview

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <div
          className="videoContainer"
          ref={videoRef}
          onClick={requestFullscreen}
        >
          <div className="iframe-container">
            <iframe
              src={videoURL}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
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
          <h2>{lectureDetails?.name}</h2>

          <div className="lceture_loading_list">
            <div className="lceture_loading_item">
              <div>
                <FontAwesomeIcon icon={faPlay} />
              </div>
            </div>
            <div className="lceture_loading_item">
              <div>
                <FontAwesomeIcon icon={faPlay} />
              </div>
            </div>
            <div className="lceture_loading_item">
              <div>
                <FontAwesomeIcon icon={faPlay} />
              </div>
            </div>
          </div>

          {lectureDetails?.parts?.map((part) => (
            <div className="lecture_content">
              <h3>{part.name}</h3>
              {part.videoUrl.map((url) => {
                console.log(url);

                return (
                  <div className="videoPlay">
                    <div className="iframe-container">
                      <iframe
                        src={url}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <FontAwesomeIcon
                      icon={faPlay}
                      onClick={() => getVideo(url)}
                    />
                  </div>
                );
              })}
            </div>
          ))}

          <div className="pdf_container">
            <iframe
              src="https://drive.google.com/file/d/19NGhr40RpqaIUCwlcgtsMK0rmnm2vw51/preview"
              width="350px"
              height="600px"
              title="PDF Viewer"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Lecture;
