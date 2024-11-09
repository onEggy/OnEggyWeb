import React, { useState } from "react";
import dynamic from 'next/dynamic';
import Navbar from "./components/navbar";
import GetFreeProp from "./home/getFreeProp";
import Section1 from "./components/mainHeadline";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Image from "next/image";
import clientPageData from "../../public/data/clientPage.json";
import seoData from "../../public/data/seo-data.json";
import serviceData from "../../public/data/serviceData.json";
import Link from "next/link";

const EnquiryModal = dynamic(() => import('./components/EnquiryModal'), { ssr: false });

const Client = () => {
  const currentPageData = seoData["/client"];
  const { head, sentence, showButton, buttonPlaceholder } = clientPageData;

  const getFreePropText = { head: "Let's get things begun", para: "Contact us today to learn more about how our digital services may assist your company in growing and succeeding online" }

  const allProjects = serviceData?.arr?.flatMap(types =>
    types?.projects?.map(project => ({
      ...project,
      image: project.image?.replace('../', '/')
    }))
  ) || [];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  const totalPages = Math.ceil(allProjects.length / projectsPerPage);

  // Calculate the projects to display based on the current page
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = allProjects.slice(indexOfFirstProject, indexOfLastProject);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      <NextSeo title={currentPageData.title} description={currentPageData.description} />
      <Head>
        <meta name="keywords" content={currentPageData?.keywords} />
      </Head>

      <Navbar />
      <Sidebar />

      {/* Hero Section */}
      <Section1
        head={head}
        sentence={sentence}
        showButton={showButton}
        buttonPlaceholder={buttonPlaceholder}
        headCss="text-center text-3xl md:text-4xl font-bold text-gray-900 mt-8 mb-2"
        pCss="text-center text-lg md:text-xl text-gray-700 mt-2"
      />

      {/* Case Studies Section */}
      <div className="my-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold mb-8">Our Case Studies</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project, index) => (
            <Link href={`/service/${project.slug}`} key={index} passHref>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                {/* Image */}
                <div className="relative h-48 md:h-60">
                  <Image
                    src={project.image}
                    alt={`Project Image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">{project.title || `Project ${index + 1}`}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {project.description || "Explore how our solutions have helped transform businesses across various industries."}
                  </p>
                  <div className="mt-4 text-cyan-600 font-medium">View Case Study &rarr;</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg font-semibold ${
              currentPage === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-cyan-500 text-white hover:bg-blue-600"
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
            className={`px-4 py-2 rounded-lg font-semibold ${
              currentPage === totalPages ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-cyan-500 text-white hover:bg-blue-600"
            }`}
          >
            Next
          </button>
        </div>
      </div>

      {/* Call to Action */}
      {/* <div className="my-12 py-8 bg-blue-100 text-center rounded-lg mx-4 sm:mx-auto sm:w-3/4 lg:w-2/3 xl:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Want to Learn More About Our Work?</h2>
        <p className="text-gray-700 mb-6">Discover how we can help transform your business with our innovative solutions.</p>
        <GetFreeProp head="Get in Touch" para="Reach out for a free consultation and let's discuss your project." />
      </div> */}

      <GetFreeProp
        head={getFreePropText.head}
        para={getFreePropText.para}
        buttonText="Get your proposal"
      />

      <EnquiryModal />
      <Footer />
    </div>
  );
};

export default Client;
