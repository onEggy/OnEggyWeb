// pages/terms-and-conditions.js
import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import seoData from "../../public/data/seo-data.json";
import { NextSeo } from "next-seo";

const TermsAndConditions = () => {
  const currentPageData = seoData["/terms-and-conditions"];

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
          Terms and Conditions
        </h2>
        <div className="space-y-4">
          <p>
            <strong>1. Introduction</strong><br/>
            These terms and conditions govern your use of OnEggy Technologies' website and services. By accessing our site, you agree to comply with these terms.
          </p>
          <p>
            <strong>2. Use of Services</strong><br/>
            - <strong>Eligibility:</strong> You must be at least 18 years old to use our services.<br/>
            - <strong>Account Responsibility:</strong> You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
          </p>
          <p>
            <strong>3. Prohibited Activities</strong><br/>
            - Using our services for any illegal or unauthorized purpose.<br/>
            - Interfering with or disrupting the functionality of our services.
          </p>
          <p>
            <strong>4. Intellectual Property</strong><br/>
            All content on our website, including text, graphics, logos, and images, is the property of OnEggy Technologies or its content suppliers and is protected by intellectual property laws.
          </p>
          <p>
            <strong>5. Limitation of Liability</strong><br/>
            OnEggy Technologies will not be liable for any damages arising from the use or inability to use our services, including but not limited to direct, indirect, incidental, punitive, and consequential damages.
          </p>
          <p>
            <strong>6. Termination</strong><br/>
            We reserve the right to terminate or suspend your access to our services at any time, without prior notice or liability, for any reason whatsoever.
          </p>
          <p>
            <strong>7. Changes to Terms</strong><br/>
            We may modify these terms and conditions at any time. Any changes will be posted on this page with an updated revision date.
          </p>
          <p>
            <strong>8. Governing Law</strong><br/>
            These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which OnEggy Technologies operates.
          </p>
          <p>
            <strong>9. Contact Us</strong><br/>
            For any questions about these terms and conditions, please contact us at ask@oneggy.com.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
