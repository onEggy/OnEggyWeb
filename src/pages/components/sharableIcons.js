import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const SharableIcons = ({ url }) => {
  return (
    <div className="fixed lg:top-1/3 lg:left-4 bottom-4 left-2 z-50 flex lg:flex-col flex-row items-center lg:items-start gap-3 lg:gap-4">
      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-gray-100 rounded-full shadow hover:bg-gray-200 transition-transform duration-300 transform hover:scale-110 flex items-center justify-center"
        aria-label="Share on Facebook"
      >
        <FontAwesomeIcon icon={faFacebookF} size="lg" className="text-black" />
      </a>

      {/* Twitter */}
      <a
        href={`https://twitter.com/intent/tweet?url=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-gray-100 rounded-full shadow hover:bg-gray-200 transition-transform duration-300 transform hover:scale-110 flex items-center justify-center"
        aria-label="Share on Twitter"
      >
        <FontAwesomeIcon icon={faTwitter} size="lg" className="text-black" />
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-gray-100 rounded-full shadow hover:bg-gray-200 transition-transform duration-300 transform hover:scale-110 flex items-center justify-center"
        aria-label="Share on LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedinIn} size="lg" className="text-black" />
      </a>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/?text=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-gray-100 rounded-full shadow hover:bg-gray-200 transition-transform duration-300 transform hover:scale-110 flex items-center justify-center"
        aria-label="Share on WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="lg" className="text-black" />
      </a>
    </div>
  );
};

export default SharableIcons;
