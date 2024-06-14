// pages/refund-policy.js
import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import seoData from "../../public/data/seo-data.json";
import { NextSeo } from "next-seo";

const RefundPolicy = () => {
  const currentPageData = seoData["/refund-policy"];

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
          Refund Policy
        </h2>
        <div className="space-y-4">
          <p>
            <strong>1. Introduction</strong><br/>
            At OnEggy Technologies, we strive to provide excellent services. This refund policy outlines the conditions under which refunds may be issued.
          </p>
          <p>
            <strong>2. Eligibility for Refunds</strong><br/>
            - <strong>Service Dissatisfaction:</strong> If you are not satisfied with our services, you may be eligible for a refund within 30 days of purchase.<br/>
            - <strong>Technical Issues:</strong> Refunds may be issued for technical issues that prevent you from using our services, provided that you have made reasonable efforts to resolve the issue with our support team.
          </p>
          <p>
            <strong>3. Process for Requesting a Refund</strong><br/>
            - <strong>Contact Us:</strong> To request a refund, please contact us at ask@oneggy.com with your order details and reason for the refund request.<br/>
            - <strong>Review:</strong> Our team will review your request and notify you of the approval or rejection of your refund.
          </p>
          <p>
            <strong>4. Refund Approval</strong><br/>
            - <strong>Approved Refunds:</strong> If your refund is approved, we will process it within 7-10 business days. The refund will be issued to your original method of payment.<br/>
            - <strong>Rejected Refunds:</strong> If your refund request is rejected, we will provide an explanation and work with you to resolve any issues.
          </p>
          <p>
            <strong>5. Use of Delivered Work Upon Refund</strong><br/>
            If you request a refund and it is approved, you agree that you will not use any of the codes, designs, works, files, or any other deliverables provided by OnEggy Technologies in your project or infrastructure. All such materials must be deleted from your systems, and you must cease any usage immediately.
          </p>
          <p>
            <strong>6. Changes to This Refund Policy</strong><br/>
            We may update this refund policy from time to time. Any changes will be posted on this page with an updated revision date.
          </p>
          <p>
            <strong>7. Contact Us</strong><br/>
            For any questions about this refund policy, please contact us at ask@oneggy.com.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
