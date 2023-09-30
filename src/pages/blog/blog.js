import Navbar from "../components/navbar";
import Section1 from "../components/mainHeadline";
import React from "react";
import Information1 from "./information1";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";

const blog = () => {
  const head = "Top 6 free website mockup tools 2022";
  const showButton = false;

  return (
    <div className="bg-cover bg-right sm:min-h-screen max-w-7xl mx-auto ">
      <Navbar />
      <Sidebar />
      <Section1 head={head} showButton={showButton} />
      <div className="flex justify-center">
        <a
          href="https://codetheorem.co/blogs/category/ui-ux-design"
          className="font-bold"
        >
          UI UX Design
        </a>
        <div className="h-[0.85rem] mt-[0.4rem] mx-4 border-black border-r-2 before:absolute before:h-40 " />
        <h1>21-Aug-2023</h1>
        <div className="h-[0.85rem] mt-[0.4rem] mx-4 border-black border-r-2 before:absolute before:h-40" />
        <h2>10 min read</h2>
      </div>
      <div className="mt-10 px-6 sm:px-20">
        <img src="../about/people.png" alt="Image" className="w-full mx-auto" />
      </div>
      <Information1 />
      <Footer />
    </div>
  );
};

export default blog;
