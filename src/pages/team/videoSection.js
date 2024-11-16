import React from "react";
import dynamic from "next/dynamic";

const YouTube = dynamic(() => import("react-youtube"), { ssr: false });

const VideoSection = () => {
  const videoId = "bBmjes_p0mQ";

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="flex mt-14 mb-32 rounded-md">
      {/* Left Decorative Image */}
      <div className="rotate180 hidden lg:block">
        <img
          className="scale-[1.7] relative -left-60 top-3"
          src="../team/figure.png"
          alt="Left Decoration"
          loading="lazy"
        />
      </div>

      {/* Video Section */}
      <div className="w-full md:w-2/3 lg:w-1/2 scale-[0.8]">
        <div className="relative rounded-2xl overflow-hidden video-wrapper">
          <YouTube videoId={videoId} opts={opts} />
        </div>
      </div>

      {/* Right Decorative Image */}
      <div className="hidden lg:block">
        <img
          className="scale-[1.7] relative right-60 top-14"
          src="../team/figure.png"
          alt="Right Decoration"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default VideoSection;
