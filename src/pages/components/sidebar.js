import { faFacebookF, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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
    <div className="container ">
      <button className="normal-button" onClick={handleMenuClick}>
        {sidebarexpanded ? <FaTimes /> : <FaBars />}
      </button>

      <div
        className={`sidebar ${sidebarexpanded ? "expanded" : ""}`}
        style={{ width: width }}
      >
        <div className="sidebar-row">
          <div className="sidebar-left m-10">
            <ul className="sidebar-list">
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
                <Link href="/blogs" className="sidebar-a sidebar-a-left">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          <div className="sidebar-right sm:mx-4">
            <div className="contact">
              <p className="sidebar-para">Contact Us</p>
              <a href="#" className="sidebar-a contact-a">
                ask@oneggy.com
              </a>
              <br />
              <a href="#" className="sidebar-a contact-a">
                +91 9811133005
              </a>
            </div>

            <div className="follow">
              <p className="sidebar-para">Follow us on</p>
              {/* <ul className="sidebar-list">
                
              </ul> */}

              <div className="flex space-x-4 justify-start mt-4 mb-8 ">

                <div className="bg-black w-8 h-8 flex justify-center items-center rounded-full text-white">
                  <a href="https://www.linkedin.com/company/oneggy" target="_blank"> <FontAwesomeIcon icon={faLinkedinIn} /> </a>
                </div>
                <div className="bg-black  w-8 h-8 flex justify-center items-center rounded-full text-white">
                  <a href="https://www.facebook.com/oneggytechnologies" target="_blank"><FontAwesomeIcon icon={faFacebookF} /> </a>
                </div>
                <div className="bg-black  w-8 h-8 flex justify-center items-center rounded-full text-white">
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>

            </div>
            {/* <p>Additional Text</p> */}
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
