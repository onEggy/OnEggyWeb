import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import { NextSeo } from "next-seo";
import Head from "next/head";
import careerData from "../../../public/data/careers.json";
import {
  MapPinIcon,
  BriefcaseIcon,
  ClockIcon,
  EnvelopeIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

const JobDetail = ({ job }) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.oneggy.com/';
  if (!job) return <div>Job not found</div>;

  return (
    <div className="container max-w-7xl mx-auto px-4 md:px-10">
      <NextSeo
        title={`${job.title} - Careers at OnEggy`}
        description={job.description}
      />
      <Head>
      <meta name="keywords" content={job.keywords?.join(", ") || ""} />
      <link
        rel="canonical"
        href={`${baseUrl}careers/${job.slug}`}
      />
      </Head>
      <Navbar />
      <Sidebar />

      <div className="my-16">
        {/* Title and Meta Information */}
        <div className="bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500 text-white p-10 rounded-lg shadow-xl mb-10">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            {job.title}
          </h1>
          <div className="flex flex-wrap items-center text-lg md:text-xl space-y-2">
            <div className="flex items-center mr-6">
              <MapPinIcon className="h-6 w-6 mr-2" /> {job.location}
            </div>
            <div className="flex items-center mr-6">
              <BriefcaseIcon className="h-6 w-6 mr-2" /> {job.type}
            </div>
            <div className="flex items-center">
              <ClockIcon className="h-6 w-6 mr-2" /> {job.experience} experience
            </div>
          </div>
        </div>

        {/* Job Description */}
        <section className="bg-white p-10 rounded-lg shadow-md border border-gray-200 mb-10">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Job Description
          </h2>
          <p className="text-gray-700 leading-relaxed">{job.description}</p>
        </section>

        {/* Responsibilities Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center">
            <StarIcon className="h-8 w-8 text-cyan-500 mr-2" />
            Responsibilities
          </h2>
          <div className="bg-gray-50 p-8 rounded-lg border-l-8 border-cyan-500">
            <ul className="list-disc list-inside text-gray-700 space-y-4">
              {job.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-6 w-6 text-cyan-600 mt-1 mr-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0l3.672 7.425 8.16 1.18-5.912 5.77 1.392 8.15-7.312-3.85-7.312 3.85 1.392-8.15-5.912-5.77 8.16-1.18z" />
                  </svg>
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center">
            <StarIcon className="h-8 w-8 text-cyan-500 mr-2" />
            Requirements
          </h2>
          <div className="bg-gray-50 p-8 rounded-lg border-l-8 border-cyan-500">
            <ul className="list-disc list-inside text-gray-700 space-y-4">
              {job.requirements.map((req, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-6 w-6 text-cyan-600 mt-1 mr-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0l3.672 7.425 8.16 1.18-5.912 5.77 1.392 8.15-7.312-3.85-7.312 3.85 1.392-8.15-5.912-5.77 8.16-1.18z" />
                  </svg>
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center">
            <StarIcon className="h-8 w-8 text-cyan-500 mr-2" />
            What We Offer
          </h2>
          <div className="bg-gray-50 p-8 rounded-lg border-l-8 border-cyan-500">
            <ul className="list-disc list-inside text-gray-700 space-y-4">
              {job.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-6 w-6 text-cyan-600 mt-1 mr-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0l3.672 7.425 8.16 1.18-5.912 5.77 1.392 8.15-7.312-3.85-7.312 3.85 1.392-8.15-5.912-5.77 8.16-1.18z" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Application Section */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-100 border border-blue-200 p-10 rounded-lg shadow-lg text-center">
          <EnvelopeIcon className="h-12 w-12 text-cyan-500 mx-auto mb-6" />
          <h3 className="text-3xl font-semibold mb-6 text-gray-900">
            Apply for this Position
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Send your resume and cover letter to{" "}
            <a
              href="mailto:hiring@oneggy.com"
              className="text-cyan-600 underline hover:text-blue-600"
            >
              hiring@oneggy.com
            </a>
          </p>
          <p className="text-sm text-gray-500">
            Include the job title in the subject line.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JobDetail;

// Generate Dynamic Routes
export async function getStaticPaths() {
  const paths = careerData.map((job) => ({
    params: { slug: job.slug },
  }));
  return { paths, fallback: false };
}

// Fetch Job Details by Slug
export async function getStaticProps({ params }) {
  const job = careerData.find((job) => job.slug === params.slug);

  return { props: { job: job || null } };
}
