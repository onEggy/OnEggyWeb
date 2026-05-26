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
import SharableIcons from "../components/sharableIcons";
import dynamic from "next/dynamic";
import ConsultationButton from "../components/consultButton";
import BlogsData from "/public/AllBlogs/index.json";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import ManagedServices from "../components/blogServicePromote";
import ScheduleCall from "../components/scheduleCall";

const Blog = (props) => {
  const EnquiryModal = dynamic(() => import("../components/EnquiryModal"), {
    ssr: false,
  });

  // State to manage scroll progress
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.oneggy.com/";
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

  // Generate Dynamic Rating Schema
  const generateRatingSchema = () => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": props.title,
      "description": props.description,
      "image": props.mainBigImage,
      "author": {
        "@type": "Person",
        "name": "OnEggy Technologies",
      },
      "publisher": {
        "@type": "Organization",
        "name": "OnEggy Technologies",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.oneggy.com/logov1.png",
        },
      },
      "datePublished": props.date,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${baseUrl}blogs/${props.slug}`,
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "245",
        "bestRating": "5",
        "worstRating": "1",
      },
    };

    return schemaData;
  };

  return (
    <>
      {/* SEO Configuration */}
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={`${baseUrl}blogs/${props.slug}`}
        openGraph={{
          title: props.title,
          description: props.description,
          url: `${baseUrl}blogs/${props.slug}`,
          type: "article",
          article: {
            tags: props.keywords.split(","),
          },
          images: [
            {
              url: props.mainBigImage,
              width: 800,
              height: 400,
              alt: props.title,
            },
          ],
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Head>
        <meta name="keywords" content={props.keywords} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateRatingSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `${baseUrl}blogs/${props.slug}`,
              },
              "headline": props.title,
              "description": props.description,
              "image": {
                "@type": "ImageObject",
                "url": props.mainBigImage,
                "width": 800,
                "height": 400,
              },
              "author": {
                "@type": "Person",
                "name": "Aakash Sharma",
              },
              "publisher": {
                "@type": "Organization",
                "name": "OnEggy Technologies",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.oneggy.com/logov1.png",
                  "width": 200,
                  "height": 50,
                },
              },
              "datePublished": props.datePublished,
              "dateModified": props.dateModified || props.datePublished,
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Blog Detail Page",
              "url": `${baseUrl}blogs/${props.slug}`,
              "description": props.description,
              "publisher": {
                "@type": "Organization",
                "name": "OnEggy Technologies",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.oneggy.com/logov1.png",
                  "width": 200,
                  "height": 50,
                },
              },
            },
          ]),
          }}
        />
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
          <span>{props.date}</span>
          <div className="h-5 mx-4 border-r border-gray-400" />
          <span>{props.readTime} read</span>
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
        </div>

        {/* Author Bio */}
        <div className="my-10">
          <ManagedServices />
        </div>
        <AuthorBio />
      </div>

      <EnquiryModal />
      <div className="bg-cover bg-right max-w-7xl mx-auto">
        <PartnerShowcase />
        {/* <ScheduleCall /> */}
        <ContactUs />
        <Footer />
      </div>
    </>
  );
};

export default Blog;

export async function getStaticProps({ params: { Blog } }) {
  let path = await BlogsData?.filter((x) => x?.["slug"] === Blog);

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
