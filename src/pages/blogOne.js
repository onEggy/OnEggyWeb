// blogOne.js

import React from 'react';
import Navbar from './components/navbar';
import MainHeadline from './components/mainHeadline';
import Footer from './components/footer';
import GetFreeProp from './home/getFreeProp';
import Information1 from './blog/information1';
import Sidebar from './components/sidebar';
import { NextSeo } from 'next-seo';

const BlogOne = ({ blog }) => {
  const currentPageData = blog; 

  return (
    <div className="bg-cover bg-right sm:min-h-screen max-w-7xl mx-auto ">
      <NextSeo title={currentPageData.title} description={currentPageData.description} />
      <Navbar />
      <Sidebar />
      <div className="w-full md:w-5/6 mx-auto">
        <MainHeadline head={currentPageData.title}  showButton={false} />
      </div>
      <div className="flex justify-center">
        <a className="font-bold">{currentPageData.category}</a>
        <div className="h-[0.85rem] mt-[0.4rem] mx-4 border-black border-r-2 before:absolute before:h-40 " />
        <h1>21-Aug-2023</h1>
        <div className="h-[0.85rem] mt-[0.4rem] mx-4 border-black border-r-2 before:absolute before:h-40" />
        <h2>10 min read</h2>
      </div>
      <div className="mt-10 px-6 sm:px-20">
        <img src={currentPageData.blogImage} alt="Blog Image" className="w-full mx-auto" />
      </div>
      <Information1 blog={blog} />
      <Footer />
    </div>
  );
};

export default BlogOne;
