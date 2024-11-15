import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import { NextSeo } from "next-seo";
import Head from "next/head";
import careerData from "../../../public/data/careers.json";
import Link from "next/link";

const Career = () => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.oneggy.com/';
  const jobsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(careerData.length / jobsPerPage);
  const currentJobs = careerData.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="container max-w-7xl mx-auto px-4 md:px-10">
      <NextSeo
        title="Careers at OnEggy Technologies"
        description="Explore opportunities at OnEggy Technologies and join our mission to create value through technology."
      />
      <Head>
        <meta
          name="keywords"
          content="careers, jobs, OnEggy Technologies, DevOps, cloud"
        />
        <link
          rel="canonical"
          href={`${baseUrl}careers/`}
        />
      </Head>

      <Navbar />
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow container mx-auto px-6 md:px-10 lg:px-16 xl:px-20 max-w-6xl my-16">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Join Our Team
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12">
            Discover career opportunities and become a part of our journey at
            OnEggy Technologies.
          </p>
        </div>

        {/* Job Listings */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {currentJobs.map((job, index) => (
            <Link
              href={`/careers/${job.slug}`}
              key={index}
              className="block bg-white border border-gray-200 shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 p-6 rounded-lg"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {job.title}
              </h2>
              <p className="text-gray-500 text-md mb-3 font-medium">
                {job.location}
              </p>
              <p className="text-gray-600 mb-4">{job.shortDescription}</p>

              {/* Job Details */}
              <div className="flex items-center justify-between text-gray-500 text-sm mt-4">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2a10 10 0 1010 10A10.013 10.013 0 0012 2zm-1 14H9v-2h2zm0-4H9V7h2zm4 4h-2v-2h2zm0-4h-2V7h2z" />
                  </svg>
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2a10 10 0 1010 10A10.013 10.013 0 0012 2zm-1 14H9v-2h2zm0-4H9V7h2zm4 4h-2v-2h2zm0-4h-2V7h2z" />
                  </svg>
                  <span>{job.experience} experience</span>
                </div>
              </div>
              <div className="mt-6 text-cyan-600 font-medium text-right">
                View Details &rarr;
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-12 space-x-6">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`px-6 py-3 font-semibold border rounded ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-cyan-500 text-white hover:bg-blue-600"
            }`}
          >
            Previous
          </button>
          <span className="font-semibold text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-6 py-3 font-semibold border rounded ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-cyan-500 text-white hover:bg-blue-600"
            }`}
          >
            Next
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Career;
