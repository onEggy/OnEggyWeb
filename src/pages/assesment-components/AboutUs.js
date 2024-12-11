import React from "react";

const AboutUsSection = () => {
  const roadmapSteps = [
    {
      title: "Cloud Optimization",
      description: "Boost efficiency and reduce costs with tailored strategies.",
    },
    {
      title: "DevOps Consulting",
      description: "Simplify workflows with cutting-edge DevOps practices.",
    },
    {
      title: "Infrastructure Automation",
      description: "Achieve seamless scalability with smart automation.",
    },
    {
      title: "Monitoring Services",
      description: "Ensure performance and uptime with real-time monitoring.",
    },
    {
      title: "Security Audits",
      description: "Protect your cloud with rigorous infrastructure reviews.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Section - About Us */}
        <div className="space-y-6">
          <h2 className="text-5xl font-extrabold leading-snug text-gray-900">
            About <span className="text-cyan-600">Us</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At our core, we’re a team of seasoned cloud and DevOps professionals
            who excel at optimizing business infrastructures. From cost savings
            to enhanced security and scalability, we deliver solutions tailored
            to your success.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Let us transform your cloud infrastructure and empower your business
            with smart strategies and expert support.
          </p>
          <a
            href="#free-assessment-form"
            className="inline-block bg-cyan-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-cyan-700 transition-transform transform"
          >
            Learn More About Us
          </a>
        </div>

        {/* Right Section - Expertise Roadmap */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-gray-900">
            Our <span className="text-cyan-600">Expertise</span>
          </h3>
          <div className="space-y-6">
            {roadmapSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-start space-x-4"
              >
                {/* Step Number */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-600 text-white font-semibold text-lg">
                  {index + 1}
                </div>
                {/* Content */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
