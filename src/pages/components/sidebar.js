import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Sidebar = () => {
  const [sidebarexpanded, setSidebarExpanded] = useState(false);
  const [width, setWidth] = useState("0%");

  const handleMenuClick = () => {
    setSidebarExpanded(!sidebarexpanded);

    if (!sidebarexpanded) {
      if (window.innerWidth < 1000) {
        setWidth("100%");
      } else {
        setWidth("50%");
      }
    } else {
      setWidth("0%");
    }
  };

  const closeSidebar = () => {
    setSidebarExpanded(false);
    setWidth("0%");
  };

  const handleResize = () => {
    if (sidebarexpanded) {
      closeSidebar();
    }
  };
  const [buttonHeight, setButtonHeight] = useState(0);
  const handleScroll = () => {
    if (!sidebarexpanded) {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newButtonHeight = Math.min(scrollTop, 40);
      setButtonHeight(newButtonHeight);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sidebarexpanded]);

  return (
    <div className="container">
      <button
        className="normal-button"
        onClick={handleMenuClick}
        style={{
          height: `${buttonHeight}px`,
          display: buttonHeight > 0 ? "block" : "none",
        }}
      >
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
                <a href="#" className="sidebar-a sidebar-a-left">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="sidebar-a sidebar-a-left">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="sidebar-a sidebar-a-left">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="sidebar-a sidebar-a-left">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="sidebar-a sidebar-a-left">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="sidebar-a sidebar-a-left">
                  BLog
                </a>
              </li>
              {/* Add more list items as needed */}
            </ul>
          </div>

          <div className="sidebar-right">
            <div className="contact">
              <p className="sidebar-para">Contact Us</p>
              <a href="#" className="sidebar-a contact-a">
                hello@oneggy.com
              </a>
              <br />
              <a href="#" className="sidebar-a contact-a">
                +91 9508040387
              </a>
            </div>

            <div className="follow">
              <p className="sidebar-para">Follow us on</p>
              <ul className="sidebar-list">
                {/* Add social media links here */}
              </ul>
            </div>
            <p>Additional Text</p>
            <li>{/* add  the button here bro */}</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
