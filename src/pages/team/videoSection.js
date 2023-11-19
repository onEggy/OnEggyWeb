import React from "react";
import YouTube from "react-youtube";

const VideoSection = () => {
  const videoId = "bBmjes_p0mQ";

  const opts = {
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="flex mt-14 mb-10 b rounded-md">
      <div className="rotate180 hidden lg:block">
        <img src="../team/figure.png" alt="Left Image" />
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2">
        <div className="relative rounded-2xl overflow-hidden video-wrapper">
          <YouTube videoId={videoId} opts={opts} />
        </div>
      </div>
      <div className="hidden lg:block">
        <img src="../team/figure.png" alt="Right Image" />
      </div>
    </div>
  );
};

export default VideoSection;
