import React from "react";
import YouTube from "react-youtube";

const VideoSection = () => {
  const videoId = "bBmjes_p0mQ";

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="flex mt-14 mb-32 b rounded-md ">
      {/* <div className="rotate180 hidden lg:block  "> */}
      <div className="rotate180 hidden lg:block  ">
        <img className="scale-[1.7] position: relative -left-60 top-3" src="../team/figure.png" alt="Left Image" />
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 scale-[0.8]">
        <div className="relative rounded-2xl overflow-hidden video-wrapper">
          <YouTube
            videoId={videoId} opts={opts} />
        </div>
      </div>
      <div className="hidden lg:block ">
        <img className="scale-[1.7] position: relative right-60 top-6" src="../team/figure.png" alt="Right Image" />
      </div>
    </div>
  );
};

export default VideoSection;
