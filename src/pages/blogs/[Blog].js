import React, { useEffect, useState } from "react";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import AuthorBio from "../components/blogAuthor";
import PartnerShowcase from "../components/partnerShowcase";
import ContactUs from "../home/contactUs";
import Footer from "../components/footer";
// import EnquiryModal from "../components/EnquiryModal";
import SharableIcons from "../components/sharableIcons";
import dynamic from "next/dynamic";
import ConsultationButton from "../components/consultButton";
import BlogsData from "/public/AllBlogs/index.json";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import ManagedServices from "../components/blogServicePromote";

const Blog = (props) => {
  const EnquiryModal = dynamic(() => import('../components/EnquiryModal'), { ssr: false });
  // State to manage scroll progress
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.oneggy.com/';
  const [scrollProgress, setScrollProgress] = useState(0);

  // Calculate scroll progress
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / windowHeight) * 100;
    setScrollProgress(scrollPercentage);
  };

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* SEO Configuration */}
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={`{${baseUrl}blogs/${props.slug}}`}
        openGraph={{
          title: props.title,
          description: props.description,
          url: `{${baseUrl}blogs/${props.slug}}`,
          type: 'article',
          article: {
            tags: props.keywords.split(','),
          },
          images: [
            {
              url: props.mainBigImage,
              width: 800,
              height: 400,
              alt: props.title,
            }
          ],
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Head>
        <meta name="keywords" content={props.keywords} />
      </Head>

      <SharableIcons url={`${baseUrl}blogs/${props.slug}`} />

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div
          className="h-full bg-cyan-500 transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Navbar and Sidebar */}
      <Navbar />
      <Sidebar />

      {/* Title Section */}
      <h1 className="mx-auto text-center my-10 w-10/12 text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight">
        {props.blogPageTitle}
      </h1>

      {/* Content Container */}
      <div className="mx-auto my-10 w-11/12 sm:w-10/12 lg:w-8/12">
        {/* Subtitle, Date, and Read Time */}
        <div className="hidden md:flex justify-center text-gray-700">
          <a href="#" className="font-bold text-lg md:text-xl">{props.subTitle}</a>
          <div className="h-5 mx-4 border-r border-gray-400" />
          <h1>{props.date}</h1>
          <div className="h-5 mx-4 border-r border-gray-400" />
          <h2>{props.readTime} read</h2>
        </div>

        {/* Main Image */}
        <div className="mt-10 px-4 sm:px-10 md:px-16">
          <Image
            src={props.mainBigImage}
            className="w-full rounded-lg"
            height={400}
            width={800}
            alt={props.blogPageTitle}
            layout="responsive"
            priority
          />
        </div>

        {/* Content and Sidebar */}
        <div className="md:flex mt-10 mb-20">
          {/* Main Content */}
          <div
            className="max-w-2xl mx-auto md:w-8/12 prose prose-sm sm:prose lg:prose-lg"
            dangerouslySetInnerHTML={{ __html: props.renderedHtml }}
          />

          {/* Sidebar Section */}
          {/* Uncomment the section below to use sidebar */}
          {/* <div className="md:w-4/12 mt-10 md:mt-0 md:pl-10">
            <div className="bg-gray-100 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold">Looking for personalized service?</h2>
              <p className="mt-4 text-gray-700">
                Contact us today to learn how our digital services can help grow your business.
              </p>
              <ConsultationButton buttonPlaceholder="Get your free consultation" />
            </div>
          </div> */}
        </div>

        {/* Author Bio */}
        <div className="my-10">
          {/* Managed Services content here */}
          <ManagedServices />
        </div>
        <AuthorBio />
      </div>

      {/* Enquiry Modal and Footer */}
      <EnquiryModal />
      <div className="bg-cover bg-right max-w-7xl mx-auto">
        <PartnerShowcase />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
};

export default Blog;

export async function getStaticProps({ params: { Blog } }) {
  let path = await BlogsData?.filter((x) => x?.["slug"] == Blog);

  let mdFileData = fs.readFileSync(path[0].mdFileLocation, "utf8");
  const { data, content } = matter(mdFileData);
  let renderedHtml = marked(content);
  path[0] = { ...path[0], ...data };
  return { props: { ...path[0], renderedHtml } };
}

export async function getStaticPaths() {
  let paths = await BlogsData?.map((x) => {
    return { params: { Blog: x?.["slug"] } };
  });

  return {
    paths,
    fallback: false,
  };
}
