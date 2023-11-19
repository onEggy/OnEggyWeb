import React, { useState } from "react";
import { FaBars, FaTimes, FaInstagram, FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';



const Sidebar = () => {
  const [sidebarexpanded, setSidebarExpanded] = useState(false);
  const [width, setWidth] = useState("0%");

  const handleMenuClick = () => {
    setSidebarExpanded(!sidebarexpanded);

    if (!sidebarexpanded) {
      if (window.innerWidth <= 600) {
        setWidth("100%");
      } else {
        setWidth("50%");
      }
    } else {
      setWidth("0%");
    }
  };


  return (
    <div className="container">
      <button className="normal-button" onClick={handleMenuClick}>
        {sidebarexpanded ? <FaTimes /> : <FaBars />}
      </button>

      <div
        className={`sidebar ${sidebarexpanded ? "expanded" : ""}`}
        style={{ width: width }}
      >
        <div className="sidebar-row">
          <div className="sidebar-left m-10">
            <ul className="flex flex-col pb-10">
              <Link href="/t">
                <p className="sidebar-a sidebar-a-left">
                  Home
                </p>
              </Link>
              <Link href="/about">
                <p className="sidebar-a sidebar-a-left">
                  About Us
                </p>
              </Link>
              <Link href="/services">
                <p className="sidebar-a sidebar-a-left">
                  Services
                </p>
              </Link>
              <Link href="/team">
                <p className="sidebar-a sidebar-a-left">
                  Team
                </p>
              </Link>
              <Link href="/client">
                <p className="sidebar-a sidebar-a-left">
                  Portfolio
                </p>
              </Link>
              <Link href="/blog">
                <p className="sidebar-a sidebar-a-left">
                  Blog
                </p>
              </Link>
            </ul>
          </div>
          <div className="sidebar-right sm:mx-4">
            <div className="contact">
              <p className="sidebar-para">Contact Us</p>
              <a href="#" className="sidebar-a contact-a">
                hello@oneggy.com
              </a>
              <br />
              <a href="#" className="sidebar-a contact-a">
                +91 9811133005
              </a>
            </div>
            <div className="contact">
              <p className="">Follow us on</p>
              <ul className="flex flex-row ">
                  <li>
                    <a href="#" className="">
                      <FaInstagram className="w-10 h-10" />
                    </a>
                  </li>
                  <li>
                    <a href="#" >
                      <FaFacebook className="w-10 h-10"/>
                    </a>
                  </li>
                  <li>
                    <a href="#" >
                      <FaLinkedin className="w-10 h-10" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaYoutube className="w-10 h-10" />
                    </a>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
