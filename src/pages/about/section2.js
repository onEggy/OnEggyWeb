import React from "react";
import Image from "next/image";
import styles from "./section2.module.css";

const Section2 = () => {
  const title = "Who we are?";

  return (
    <div className="container mx-auto px-4 sm:px-0">
      <div className="flex sm:flex-row flex-col">
        <div className="w-full sm:hidden mt-16 sm:pr-8">
          {/* Apply rounded and shadow classes */}
          <div className="rounded-xl shadow-lg">
            <Image
              src="/about/people.png"
              alt="People Image"
              sizes="100vw"
              width={0}
              height={0}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center w-full md:my-20">
          <div className="sm:w-1/2 sm:mt-0 mt-8 text-center ">
            <h2 className="bg-blue inline-flex  font-semibold px-2 py-2 rounded-md text-3xl md:font-bold md:text-4xl">
              {title}
            </h2>
            <p className="sm:mt-8 mt-8 sm:mr-16 text-left">
              Despite commercial reluctance, Oneggy is devoted to Open Source
              methods in order to produce creative, sustainable alternative
              applications. Our company's objective is to promote the widespread
              use of high-quality Open Source Application Technology.
              <br />
              <br />
              We are a one-stop shop for any organization's DevOps and cloud
              needs. We offer low-cost, high-availability, secure, and scalable
              services and subscription models based on Linux, Open Source,
              Cloud, and DevOps. Our solution- and support-based approach
              culminates in a complete technological solution that allows you to
              reap the benefits of an effective IT strategy based on a solid
              business model.
            </p>
          </div>
          <div className="sm:w-1/2 hidden sm:block p-10 mt-24 sm:mt-0">
            <Image
              src="/about/people.png"
              alt="People Image"
              height={0}
              width={0}
              className={`w-full h-full rounded-xl shadow-2xl ${styles["shadowfor-box"]}`}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
