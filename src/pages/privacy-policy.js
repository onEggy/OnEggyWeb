// pages/privacy-policy.js
import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import seoData from "../public/data/seo-data.json";
import { NextSeo } from "next-seo";

const PrivacyPolicy = () => {
  const currentPageData = seoData["/privacy-policy"];

  return (
    <div className="max-w-7xl mx-auto">
      <NextSeo
        title={currentPageData.title}
        description={currentPageData.description}
      />
      <Navbar />
      <Sidebar />
      <div className="px-4 py-10">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">
          Privacy Policy
        </h2>
        <div className="space-y-4">
          <p>
            <strong>1. Introduction</strong><br/>
            Welcome to OnEggy Technologies. We value your privacy and are committed to protecting your personal data. This privacy policy outlines how we collect, use, and safeguard your information.
          </p>
          <p>
            <strong>2. Information We Collect</strong><br/>
            - <strong>Personal Information:</strong> Name, email address, phone number, and other contact details.<br/>
            - <strong>Usage Data:</strong> Information about how you interact with our website and services.<br/>
            - <strong>Cookies:</strong> We use cookies to enhance your experience on our site.
          </p>
          <p>
            <strong>3. How We Use Your Information</strong><br/>
            - To provide and improve our services.<br/>
            - To communicate with you about updates, promotions, and other relevant information.<br/>
            - To analyze website usage and improve our website and services.
          </p>
          <p>
            <strong>4. Sharing Your Information</strong><br/>
            - We do not sell or rent your personal information to third parties.<br/>
            - We may share your data with trusted partners who assist us in operating our website and services, provided they agree to keep this information confidential.<br/>
            - We may also disclose your information if required by law or to protect our rights.
          </p>
          <p>
            <strong>5. Data Security</strong><br/>
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
          </p>
          <p>
            <strong>6. Your Rights</strong><br/>
            - You have the right to access, correct, or delete your personal data.<br/>
            - You can also object to the processing of your data and request data portability.
          </p>
          <p>
            <strong>7. Changes to This Privacy Policy</strong><br/>
            We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
          </p>
          <p>
            <strong>8. Contact Us</strong><br/>
            If you have any questions or concerns about this privacy policy, please contact us at ask@oneggy.com.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
