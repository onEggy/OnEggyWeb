import { faFacebookF, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [sidebarexpanded, setSidebarExpanded] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(null);

  // Track viewport width for responsive styles
  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuClick = () => {
    setSidebarExpanded(!sidebarexpanded);
  };

  return (
    <div className="relative">
      {/* Sidebar Toggle Button */}
      <button className="normal-button z-50 fixed top-4 right-4" onClick={handleMenuClick}>
        {sidebarexpanded ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar and Overlay */}
      <div
        className={`fixed inset-y-0 right-0 transform ${
          sidebarexpanded ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out z-40`}
        style={{ width: sidebarexpanded ? (viewportWidth <= 600 ? "100%" : "50%") : "0" }}
      >
        {/* Overlay, only visible when sidebar is expanded */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-500 ${
            sidebarexpanded ? "opacity-50" : "opacity-0 pointer-events-none"
          }`}
          onClick={handleMenuClick}
        ></div>

        {/* Sidebar Content */}
        <div className="relative bg-white w-full h-full shadow-lg p-8 overflow-y-auto">
          <div className="sidebar-row">
            {/* Sidebar Links */}
            <div className="sidebar-left mb-10">
              <ul className="sidebar-list space-y-4">
                <li>
                  <Link href="/" className="sidebar-a sidebar-a-left">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="sidebar-a sidebar-a-left">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="sidebar-a sidebar-a-left">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="sidebar-a sidebar-a-left">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/client" className="sidebar-a sidebar-a-left">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="sidebar-a sidebar-a-left">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="sidebar-a sidebar-a-left">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="sidebar-a sidebar-a-left">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="sidebar-right sm:mx-4">
              <div className="contact mb-8">
                <p className="sidebar-para font-semibold text-lg">Contact Us</p>
                <a href="mailto:ask@oneggy.com" className="sidebar-a contact-a">
                  ask@oneggy.com
                </a>
                <br />
                <a href="tel:+919811133005" className="sidebar-a contact-a">
                  +91 9811133005
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="follow">
                <p className="sidebar-para font-semibold text-lg">Follow us on</p>
                <div className="flex space-x-4 justify-start mt-4 mb-8">
                  <div className="bg-black w-8 h-8 flex justify-center items-center rounded-full text-white transform hover:scale-110 transition-transform duration-200">
                    <a href="https://www.linkedin.com/company/oneggy" target="_blank">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </div>
                  <div className="bg-black w-8 h-8 flex justify-center items-center rounded-full text-white transform hover:scale-110 transition-transform duration-200">
                    <a href="https://www.facebook.com/oneggytechnologies" target="_blank">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </div>
                  <div className="bg-black w-8 h-8 flex justify-center items-center rounded-full text-white transform hover:scale-110 transition-transform duration-200">
                    <a href="https://www.instagram.com/oneggytechnologies" target="_blank">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
