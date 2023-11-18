
import React from 'react';
import { useRouter } from 'next/router';
import blogsData from '../../../public/data/blogs.json';
import BlogOne from '../blogOne';

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const blog = blogsData.blogs.find((item) => item.id === id);

  if (!blog) {
    return <p>Loading...</p>;
  }

  return <BlogOne blog={blog} />;
};

export default BlogDetail;
