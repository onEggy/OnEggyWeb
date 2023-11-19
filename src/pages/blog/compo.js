import React from "react";
import { useEffect, useState } from "react";
import blogsData from '../../../public/data/blogs.json';
import Link from "next/link";

const Compo = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogsData.blogs.slice(0, 3));
  }, []);

  const truncateDescription = (description) => {
    const words = description.split(' ');
    const truncatedDescription = words.slice(0, 20).join(' ');
    return `${truncatedDescription}...`;
  };

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <img src={blog.thumbnail} alt={`Thumbnail for ${blog.title}`} className="w-full mt-8 sm:hidden" />
          <h2 className="bg-blue font-semibold px-2 py-1 rounded-lg text-2xl sm:mt-0 mt-4 sm:text-4xl w-max">{blog.category}</h2>
          <Link href={`/blog/${blog.id}`} passHref>
            <h3 className="font-semibold text-4xl mt-3">{blog.title}</h3>
          </Link>
          <p className="mt-3 mb-5 text-lg">{truncateDescription(blog.description)}</p>
        </div>
      ))}
    </div>
  );
};

export default Compo;
