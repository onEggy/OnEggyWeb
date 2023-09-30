import React from "react";
import Compo from "./compo";
import ConsultationButton from "../components/consultButton";

const information1 = () => {
  const arr = [
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

  const showButton = true;
  const buttonPlaceholder = "Get your free consultation";

  return (
    <div className="flex flex-col md:flex-row sm:p-12 mt-8 px-6">
      <div className="sm:pr-10 text-lg text-justify sm:text-left">
        <p>
          About 95% of the first impression comes from your website design. This
          makes building a compelling and informative website crucial. And that
          needs you to look for the perfect web design agency.
          <br /> The best web design agency can make your website a supercharged
          marketing tool for your business. But with so many web design options,
          it’s like choosing from many choices. So, before you start Googling
          the best web design company, go through a few insider tips about how
          to choose a web design agency. <br />
          Tips to Choose the Best Web Design Agency for Your Project
          <br />
          <br />
          To help you shortlist the excellent web design companies for startups
          and finally choose the best, here’s the lowdown on how to choose a web
          design company that matches your business goals and working style:
          <br />
          <br />
        </p>
        <h1 className="text-4xl font-bold">Define Your Goals and Budget</h1>
        <p>
          Your website is a robust business and marketing tool. It will help if
          you have a clear picture of the primary aim of your website and its
          requirements to fulfill that aim. Here are some examples of what you
          could be the primary goal of your website:
          <br />
          {/* <ul className="list-disc ml-5">
            <li>
              Display your products or services with stunning visuals and
              detailed descriptions to attract potential customers.
            </li>
            <li>
              Set up an online store where potential customers can browse, add
              to cart, and make purchases quickly.
            </li>
            <li>
              Educate and engage your audience through valuable content, like
              blog posts or articles.
            </li>
            <li>
              Allow clients to book appointments or schedule services directly
              through your website.
            </li>
            <li>
              Create exclusive content for members or offer subscription-based
              services.
            </li>
            <li>
              Increase online presence and engagement by connecting your website
              to social media platforms.
            </li>
          </ul> */}
          <br />
          Accordingly, you should decide on the budget of your website and hire
          an affordable web design agency.
          <br /> Check their website
          <br />
          <br />
          Once you know your website’s goals, go through the website of your
          chosen web designers before hiring them. This way, you’ll get to know
          their design aesthetic, user experience, and technical proficiency.
          You’ll also know if the web design agency stays current with design
          trends and technologies. <br />
          <br />
          More specifically, when examining the website of a web design agency,
          consider the following:
        </p>
        <ul className="list-disc ml-5 font-bold">
          <li>
            Notice the visual appeal, layout, and overall design. Is it modern,
            visually engaging, and easy to navigate?
          </li>
          <li>
            How intuitive is the navigation? Is it easy to find information? A
            positive user experience is vital for your own website’s success.
          </li>
          <li>
            Check how the website performs on different devices. A
            mobile-friendly site is essential for reaching a wider audience.
          </li>
          <li>
            Analyze the clarity, accuracy, and relevance of the content. It
            reflects their ability to convey messages effectively.
          </li>
          <li>
            Evaluate the effectiveness of their Call to Action (CTA). A website
            should guide visitors toward desired actions.
          </li>
          <li>
            Check if their website is optimized for search engines. This shows
            their understanding of online visibility strategies.
          </li>
        </ul>
        <br />
        <h1 className="text-4xl font-bold">Portfolio and Experience</h1>
        <p>
          Once you’ve gone through the website of a web design agency, check for
          its working style and experience. More specifically, look for the
          following to find out if web designers are the right fit for you or
          not:
        </p>
        <ul className="list-disc ml-5">
          <li>
            Do web designers have experience crafting websites for your
            industry, leading to positive results, including features you desire
            or reflecting your preferences?
          </li>
          <li>Look for streamlined processes to simplify website creation.</li>
          <li>
            Check for ongoing marketing support to foster business growth.
          </li>
          <li>
            Assess whether you’re their typical customer size. Being too small
            or too large could affect service quality.
          </li>
        </ul>
        <br />

        <p className="font-semibold">
          In addition to experience, it’s essential to gauge their portfolio.
          So, check the following aspects before hiring them:
        </p>
        <p>
          Suppose your chosen web design agency has commendable experience and
          portfolio but needs more substantial experience in your industry. In
          that case, you can contact them to know how they’d tailor solutions
          for you or if they have worked in a similar industry.
        </p>
      </div>

      <div>
        <div>
          {arr.map((props, index) => (
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
              {showButton && (
                <ConsultationButton buttonPlaceholder={buttonPlaceholder} />
              )}
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default information1;
