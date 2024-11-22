import React from "react";
import Link from "next/link";
import blogsData from "../../../public/AllBlogs/index.json";
import Headline from "../components/headline";

const LatestBlogs = () => {
  // Sort blogs to show the latest blog as the first one
  const sortedBlogs = blogsData.reverse();
  const latestBlog = sortedBlogs[0];
  const otherBlogs = sortedBlogs.slice(1, 4); // Get the next 3 blogs

  const title = "Our Latest Blogs";
  const desc = "Explore our insights, tips, and updates on Cloud, DevOps, and Technology.";

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <Headline title={title} desc={desc} descCss={"md:mt-8"} />

        {/* Blog Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          {/* Latest Blog */}
          <div className="col-span-1 md:col-span-2 border rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            <Link href={`/blogs/${latestBlog.slug}`}>
              <div className="block cursor-pointer">
                <h2 className="text-6xl font-bold text-gray-800 group-hover:text-cyan-600 transition-colors duration-300">
                  {latestBlog.title}
                </h2>
                <p className="mt-4 text-gray-600 text-base line-clamp-3">
                  {latestBlog.overview}
                </p>
                <div className="mt-4 text-sm font-medium text-cyan-500 group-hover:underline">
                  Read More
                </div>
              </div>
            </Link>
          </div>

          {/* Other Blogs */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-1 gap-6">
            {otherBlogs.map((blog, index) => (
              <Link href={`/blogs/${blog.slug}`} key={index}>
                <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-cyan-600 transition-colors duration-300">
                    {blog.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm line-clamp-2">
                    {blog.overview}
                  </p>
                  <div className="mt-2 text-sm font-medium text-cyan-500 group-hover:underline">
                    Read More
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
