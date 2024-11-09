import React from "react";
import seoData from "/public/data/seo-data.json";
import seggregateData from "/public/data/blogTags.json"
import { NextSeo } from "next-seo";
import Head from "next/head";
import GetFreeProp from "../home/getFreeProp";
import Footer from "../components/footer";

import Navbar from "../components/navbar";
import MainHeadline from "../components/mainHeadline";
import Compo from "../blogOne/compo";
import Sidebar from "../components/sidebar";
import blogsData from '../../../public/AllBlogs/index.json'
import Link from "next/link";


const blogOne = () => {
  const currentPageData = seoData["/blog"];
  const head = "Tech Talk by OnEggy";
  const head2 = "Blogs on Cloud, DevOps & More"
  const sentence =
    "Empower your digital presence with OnEggy’s IT expertise. Leverage our innovative solutions to transform your business and drive success in the cloud-driven era.";
  const showButton = false;
  const arr = blogsData.reverse().slice(0, 5).map(x => ({ ...x, head: x.category, title: x.title, content: x.overview }))
  const CategoryList = seggregateData.category
  const tagList = seggregateData.tags



  return (
    <div className="max-w-7xl mx-auto">
      <NextSeo
        title={currentPageData.title}
        description={currentPageData.description}
      />
      <Head>
        <meta name="keywords" content={currentPageData?.keywords} />
      </Head>
      <Navbar />
      <Sidebar />
      <div className="w-full md:w-5/6  mx-auto">
        <MainHeadline
          mainCss={'mt-10'}
          headCss={''}
          head2Css={'sm:mt-2 w-full sm:mb-10 mt-[3px]'}
          pCss={' md:w-11/12 '}
          head={head} head2={head2} sentence={sentence} showButton={showButton} />
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-3/4 px-4">
          {arr.map((props, index) => (
            <Link href={`/blogs/${props.slug}`}> <Compo key={index} {...props} /></Link>
          ))}
        </div>
        <div className="hidden lg:block w-full md:w-1/4 px-4 mt-10 md:mt-0">
          <h2 className="text-3xl font-bold sm:mb-10">Categories</h2>
          <ul className="font-semibold text-lg mt-4">
            {CategoryList.map((category, idx) => {

              return (<li key={idx} className="border rounded-xl px-6 py-4 my-2 hover:bg-l_blue cursor-pointer flex items-center">
                <img
                  src="/blog/1.png"
                  alt="Seeing Something???"
                  width={38}
                  className="mr-4"
                />
                {category}
              </li>)

            })}

          </ul>
          <h3 className="text-3xl font-bold sm:mt-10">All Tags</h3>
          <ul className="flex flex-wrap mt-2 -ml-2">
            {tagList.map(tag => {
              return (
                <li className="border rounded-[3rem] py-2 px-4 my-1 mx-2">
                  {tag}
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <GetFreeProp
        head={'Looking for any personalized service'}
        para={'Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.'}
      />

      {/* <div className="w-full md:w-3/4 px-4 md:mb-3 ">
        {arr.map((props, index) => (
          <Link href={`/blogs/${props.slug}`}> <Compo key={index} {...props} /></Link>
        ))}
      </div> */}
     
      <Footer />
    </div>
  );
};

export default blogOne;
