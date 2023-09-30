import React from "react";

const VideoSection = () => {
  return (
    <div className="flex mt-14">
      <div className="rotate180 hidden lg:block">
        <img src="../team/figure.png" alt="Left Image" />
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2">
        <div className="relative">
          <video
            controls
            className="w-full h-auto"
            src="../team/298382370_104400392382123_562736855715581535_n.mp4" // Replace with the URL of your video
            alt="Video"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="hidden lg:block">
        <img src="../team/figure.png" alt="Right Image" />
      </div>
    </div>
  );
};

export default VideoSection;
