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
                  Blog
                </a>
              </li>
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
                +91 9508040387
              </a>
            </div>

            <div className="follow">
              <p className="sidebar-para">Follow us on</p>
              <ul className="sidebar-list">
                {/* Add social media links here */}
              </ul>
            </div>
            {/* <p>Additional Text</p> */}
            <li>{/* add  the button here bro */}</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
