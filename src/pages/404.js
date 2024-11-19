import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 flex flex-col items-center justify-center text-white px-6">
      {/* Error Message Section */}
      <div className="text-center mb-8">
        <h1 className="text-7xl sm:text-9xl font-extrabold">404</h1>
        <h2 className="text-2xl sm:text-3xl mt-4 font-semibold">
          Page Not Found
        </h2>
        <p className="mt-4 text-lg sm:text-xl max-w-lg mx-auto">
          Looks like you're lost in the cloud. Let's get you back to where you
          belong!
        </p>
      </div>

      {/* Advanced SVG Illustration */}
      <div className="max-w-md sm:max-w-lg mb-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 400"
          className="w-full h-auto text-white"
          fill="none"
        >
          {/* Cloud */}
          <path
            d="M300 150c-39.8 0-72 31.7-72 70.8s32.2 70.8 72 70.8h120c39.8 0 72-31.7 72-70.8S459.8 150 420 150c-7.8-30.6-35.8-53-68.4-53-32.6 0-60.6 22.4-68.4 53z"
            fill="url(#cloudGradient)"
          />

          {/* Nodes and Connections */}
          <circle cx="200" cy="180" r="10" fill="#00FFCC" />
          <circle cx="400" cy="180" r="10" fill="#00FFCC" />
          <circle cx="300" cy="280" r="10" fill="#00FFCC" />
          <path
            d="M200 180L300 280L400 180"
            stroke="#00FFCC"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Error Symbol */}
          <g transform="translate(240, 100)">
            <circle cx="60" cy="60" r="60" fill="url(#errorGradient)" />
            <text
              x="60"
              y="75"
              textAnchor="middle"
              fontSize="48"
              fontWeight="bold"
              fill="white"
            >
              404
            </text>
          </g>

          {/* Gradient Definitions */}
          <defs>
            <linearGradient
              id="cloudGradient"
              x1="200"
              y1="150"
              x2="500"
              y2="150"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00FFCC" />
              <stop offset="1" stopColor="#0099FF" />
            </linearGradient>
            <linearGradient
              id="errorGradient"
              x1="0"
              y1="0"
              x2="120"
              y2="120"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF5757" />
              <stop offset="1" stopColor="#FF8A8A" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Call-to-Action Buttons */}
      <div className="flex flex-wrap justify-center space-x-4">
        <Link href="/">
          <button className="px-6 py-3 bg-black text-blue-700 font-semibold rounded-lg shadow hover:bg-white-100 hover:text-black-100 transition duration-300">
            Back to Homepage
          </button>
        </Link>
        <Link href="/contact">
          <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-500 transition duration-300">
            Contact Support
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
