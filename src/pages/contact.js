import React from "react";
import Navbar from "./components/navbar";
import ContactUs from "./home/contactUs";
import Footer from "./components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Sidebar from "./components/sidebar";
import seoData from "../../public/data/seo-data.json";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Link from "next/link";

const section1 = () => {
  const currentPageData = seoData["/contact"];
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.oneggy.com/';

  const profile = [
    {
      name: "Aakash Sharma",
      position: "CEO and Founder",
      image: "/contact/Akash.png",
      alt: "Profile Image",
      sns: faLinkedin,
    },
    {
      name: "Akanshu Sharma",
      position: "Cloud Expert",
      image: "/contact/Akanshu.png",
      alt: "Profile Image",
      sns: faLinkedin,
    },
  ];
  return (
    <div className="max-w-7xl mx-auto">
      <NextSeo
        title={currentPageData.title}
        description={currentPageData.description}
      />
      <Head>
        <meta name="keywords" content={currentPageData?.keywords} />
        <link
          rel="canonical"
          href={`${baseUrl}contact`}
        />
      </Head>

      <Navbar />
      <Sidebar />
      <h2 className="text-5xl text-center font-semibold mt-10">Ready to Transform?<br />We’re Just a Message Away</h2>
      <div className="sm:flex grid sm:grid-cols-2 lg:grid-cols-3 mb-10 justify-center">
        <div className="sm:flex">
          {profile.map((data,index) => (
            <div
              key={index}
              className="border border-d_blue rounded-[3rem] p-10 mx-6 mt-10 shadow-bottom"
            >
              <div className="flex sm:justify-evenly">
                <div>
                  <img
                    src={data.image}
                    alt={data.alt}
                    width={105}
                    height={102}
                  />
                </div>
                <div className="ml-[8px] mr-[10px] items-end sm:mt-0 mt-12 lg:mt-14">
                  <h3 className="font-semibold text-lg">{data.name}</h3>
                  <p>{data.position}</p>
                </div>
                <div className="bg-l_black p-1 pr-2 pl-2 rounded-full text-blue m-auto items-start mb-16">
                  <FontAwesomeIcon icon={data.sns} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default section1;
