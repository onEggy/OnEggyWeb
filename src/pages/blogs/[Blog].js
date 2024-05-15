import React from "react";
import ReactMarkdown from "react-markdown"
import html from 'remark-html';
import Navbar from "../components/navbar";
import Section1 from "../components/mainHeadline";
import Information1 from "./information1";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import Compo from "./component";
import ConsultationButton from "../components/consultButton";

import { NextSeo } from "next-seo";
import BlogsData from "/public/AllBlogs/index.json";


import fs from 'fs'
import matter from "gray-matter"
import { marked } from "marked";
import Image from "next/image";
import Head from "next/head";



const Blog = (props) => {

  // console.log('props is',props)
  const sideContent = [
    {
      head: "Business",
      title: "Top 6 free website mockuptools 2022",
      content:
        "We are a team of Artists, Innovators & Strategists who left their ordinary life to invent and reinvent the common. Our Passion for technologies changes problems into opportunities.",
    },
    {
      head: "Business",
      title: "Top 6 free website mockuptools 2022",
      content:
        "We are a team of Artists, Innovators & Strategists who left their ordinary life to invent and reinvent the common. Our Passion for technologies changes problems into opportunities.",
    },
    {
      head: "Business",
      title: "Top 6 free website mockuptools 2022",
      content:
        "We are a team of Artists, Innovators & Strategists who left their ordinary life to invent and reinvent the common. Our Passion for technologies changes problems into opportunities.",
    },
  ];


  return (
    // <div className="bg-cover bg-right sm:min-h-screen max-w-7xl mx-auto ">
    //   <Navbar />
    //   <Sidebar />
    //   <Section1 head={head} showButton={showButton} />


    //   <Information1 />
    //   <Footer />
    // </div>
    (

      <>
        <NextSeo
          title={props?.['title']}
          description={props?.['description']}
          openGraph={{
            title: props?.['title'],
            description: props?.['description'],
            url: `https://www.oneggy.com/blogs/${props['slug']}`,
            article: {
              tags: props?.['keywords'], 
            },
          }}
        />
        <Head>
        <meta name="keywords" content={props.keywords} />

        </Head>

        <Navbar />
        <Sidebar />
        <h1 className="mx-auto text-center my-10 w-8/12 text-4xl  md:text-7xl font-medium tracking-tight">{props.blogPageTitle}</h1>
        <div className="mx-auto my-10 w-11/12">


          <div className="hidden md:flex justify-center">
            <a
              href="https://codetheorem.co/blogs/category/ui-ux-design"
              className="font-bold"
            >
              {props.subTitle}
            </a>
            <div className="h-[0.85rem] mt-[0.4rem] mx-4 border-black border-r-2 before:absolute before:h-40 " />
            <h1>{props.date}</h1>
            <div className="h-[0.85rem] mt-[0.4rem] mx-4 border-black border-r-2 before:absolute before:h-40" />
            <h2>{props.readTime} read</h2>
          </div>

          <div className="mt-10 px-6 sm:px-20">
            <Image
              src={props.mainBigImage}
              className="w-full mx-auto"
              height={100}
              width={100}
              alt="helo"
            />
          </div>
          <div className="md:flex mt-10 mb-24 justify-center">

            <div className=" max-w-8/12 mx-auto pt-10 md:pr-3 prose" dangerouslySetInnerHTML={{ __html: props.renderedHtml }} />

            <div className="md:w-4/12  mt-10 md:pl-16">
              <div>
                {sideContent.map((props, index) => (
                  <Compo key={index} {...props} />
                ))}
              </div>

              <div className="mt-16">
                <div className="bg-l_grey rounded-3xl p-10">
                  <h1 className="text-4xl font-semibold">
                    Looking for any personalized service
                  </h1>
                  <p className="mt-4">
                    Contact us today to learn more about how our digital marketing
                    services can help your business grow and succeed online.
                  </p>
                  <ConsultationButton buttonPlaceholder={'Get your free consultation'} />

                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="bg-cover bg-right max-w-7xl mx-auto">
          <Footer />
        </div>
      </>
    )
  );
};

export default Blog;



export async function getStaticProps({ params: { Blog } }) {

  let path = await BlogsData?.filter(x => x?.['slug'] == Blog)

  // const markdown = fs.readFileSync(path[0].mdFileLocation, 'utf8');
  // const renderedHtml = marked(markdown);

  // const slug = fileName.replace(".mdx", "");
  // const fileContents = fs.readFileSync(
  //   path.join(contentDirectory, fileName),
  //   "utf8"
  // );

  let mdFileData = fs.readFileSync(path[0].mdFileLocation, "utf8")
  const { data, content } = matter(mdFileData);
  let renderedHtml = marked(content)
  // console.log('data is',data)
  path[0] = { ...path[0], ...data }
  return { props: { ...path[0], renderedHtml } }

}



export async function getStaticPaths() {

  let paths = await BlogsData?.map(x => {

    return { params: { Blog: x?.['slug'] } }
  })

  return {
    paths,
    fallback: false
  }
}


