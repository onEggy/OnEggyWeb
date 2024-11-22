import React from "react";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import Image from "next/image";
import caseStudies from "../../../public/data/clientPage.json";

const CaseStudyComponent = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 sm:px-12 lg:px-20">
      <Marquee gradient={false} speed={50} pauseOnHover>
        <div className="flex space-x-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden w-72 sm:w-80 md:w-96 transform hover:scale-105 transition-transform duration-300"
            >
              {/* Image Section */}
              <div className="relative w-full h-48">
                <Image
                  src={study.image}
                  alt={study.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Category Badge */}
                <span className="text-xs font-medium text-gray-500 bg-gray-200 px-3 py-1 rounded-full contents mb-3">
                  {study.category.replace("-", " ")}
                </span>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {study.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                  {study.summary}
                </p>

                {/* Footer Section */}
                <div className="flex justify-between items-center">
                  <Link href={`/client/${study.slug}`} legacyBehavior>
                    <a className="text-cyan-600 font-medium hover:underline">
                      Read More →
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default CaseStudyComponent;
