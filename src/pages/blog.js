import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from './components/navbar';
import MainHeadline from './components/mainHeadline';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import GetFreeProp from './home/getFreeProp';
import { NextSeo } from 'next-seo';
import blogsData from '../../public/data/blogs.json';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogsData.blogs);
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <NextSeo title="Your Blog Title" description="Your Blog Description" />
      <Navbar />
      <Sidebar />
      <div className="w-full md:w-5/6 mx-auto">
        <MainHeadline
          head="We Serve Trending Brews!"
          sentence="Create your unique footprint in the digital world with OnEggy’s IT services. Transform your business with our cutting-edge and effective digital solutions to pave your path to success."
          showButton={false}
        />
      </div>
      <div className="flex flex-wrap">
      <div className="w-full md:w-3/4 px-4">
        <div className="flex flex-wrap justify-center ">
        {blogs.map((blog, index) => (
              <div className="flex flex-col md:flex-row" key={blog.id}>
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6 md:mb-0 order-1 md:order-1">
                  <h2 className="bg-blue font-semibold px-2 py-1 mb-1 rounded-lg w-max hidden md:block">
                    {blog.category}
                  </h2>
                  <img
                    src={blog.thumbnail}
                    alt={`Thumbnail for ${blog.title}`}
                    className="mx-auto max-w-full mb-1 hidden md:block"
                  />
                </div>
                <div className="w-full md:w-1/2 lg:w-2/3 px-4 order-2 md:order-1">
                  <img
                    src={blog.thumbnail}
                    alt={`Thumbnail for ${blog.title}`}
                    className="mx-auto max-w-full mb-1 block md:hidden"
                  />
                  <h2 className="bg-blue font-semibold px-2 py-1 mb-1 rounded-lg w-max block md:hidden">
                    {blog.category}
                  </h2>
                  <Link href={`/blog/${blog.id}`} passHref>
                    <h3 className="font-semibold text-2xl">{blog.title}</h3>
                  </Link>
                  <p className="mt-3 mb-5 text-base">{blog.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
        <div className="w-full md:w-1/4 px-4 mt-10 md:mt-0">
          <h2 className="text-3xl font-bold">Categories</h2>
          <ul className="font-semibold text-lg mt-4">
            {Array.from(new Set(blogs.map((blog) => blog.category))).map((category) => (
              <li
                key={category}
                className="border rounded-xl px-6 py-4 my-2 hover:bg-l_blue cursor-pointer flex items-center"
              >
                <img
                  src={`/blog/${category.toLowerCase()}.png`} 
                  alt={`Category: ${category}`}
                  width={38}
                  className="mr-4"
                />
                {category}
              </li>
            ))}
          </ul>
          <h3 className="text-3xl font-bold mt-8">All Tags</h3>
          <ul className="flex flex-wrap mt-2">
            {Array.from(new Set(blogs.flatMap((blog) => blog.keywords))).map((tag) => (
              <li key={tag} className="border rounded-[3rem] py-2 px-4 my-1 mx-2">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {blogs.length > 2 && <GetFreeProp />}
      <Footer />
    </div>
  );
};

export default Blog;
