import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const AuthorBio = () => {
  return (
    <div className="bg-white border border-gray-200 shadow-lg p-6 md:p-10 mx-auto max-w-5xl flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-10">
      {/* Profile Image - Full Image without Rounded Corners */}
      <div className="w-full md:w-1/3 h-60 md:h-auto overflow-hidden">
        <Image
          src="/contact/Akash.png"
          alt="Aakash Sharma"
          layout="responsive"
          width={300}
          height={200}
          objectFit="cover"
          className="shadow-md"
        />
      </div>

      {/* Bio Section */}
      <div className="flex-1 text-center md:text-left">
        <div className="mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Aakash Sharma</h2>
          <p className="text-blue-600 font-medium text-lg">Founder of OnEggy Technologies</p>
        </div>

        <p className="text-gray-700 text-base leading-relaxed max-w-2xl">
          Aakash Sharma is the founder of <a href="https://www.oneggy.com" className="text-blue-600 hover:underline">OnEggy Technologies</a>, with over 10 years of experience in DevOps, Full-Stack Development, and Cloud solutions. He is committed to helping businesses optimize their tech infrastructure and thrive in the cloud ecosystem.
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center md:justify-start space-x-6 mt-6">
          <a href="https://github.com/redaakash" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/redaakash" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://www.oneggy.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
            <FontAwesomeIcon icon={faGlobe} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;
