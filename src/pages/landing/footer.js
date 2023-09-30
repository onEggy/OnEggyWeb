import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const footer = () => {
  return (
    <div className="bg-l_black" style={{
      borderTopLeftRadius: '45px',
      borderTopRightRadius: '45px',
      padding:"0px 60px"
    }}>
      <div>
        <nav className="py-4 flex justify-between items-center mx-auto max-w-7xl mt-16 rounded-3xl">
          <img
            src="/logoWhite.png"
            alt="Logo"
            width="265"
            height="109"
            className="logo_img"  
          />
          <ul className="flex justify-center py-4 text-white underline">
            <li className="mx-5 cursor-pointer pt-2">About us</li>
            <li className="mx-5 cursor-pointer pt-2">Service</li>
            <li className="mx-5 cursor-pointer pt-2">Team</li>
            <li className="mx-5 cursor-pointer pt-2">Portfolio</li>
            <li className="mx-5 cursor-pointer pt-2">Blog</li>
          </ul>
          <div className="flex">
          <div style={{
              background: 'white',
              width: "30px",
              height: "30px",
              padding: '4px',
              display: 'flex',
              justifyContent: 'center',
              alignItems:'center',
              borderRadius: '25px',
              marginRight:'12px'
            }}>
            <FontAwesomeIcon icon={faLinkedin} size="1x" />
            </div>
            <div style={{
              background: 'white',
              width: "30px",
              height: "30px",
              padding: '4px',
              display: 'flex',
              justifyContent: 'center',
              alignItems:'center',
              borderRadius: '25px',
              marginRight:'12px'
            }}>
              <FontAwesomeIcon icon={faFacebookF} size="1x" />
            </div>
            <div style={{
              background: 'white',
              width: "30px",
              height: "30px",
              padding: '4px',
              display: 'flex',
              justifyContent: 'center',
              alignItems:'center',
              borderRadius: '25px',
              marginRight:"100px"
            }}>
            <FontAwesomeIcon icon={faTwitter} size="1x" />
            </div>   
          </div>
        </nav>
        <div className="flex justify-between mt-12">
        <div className="w-[23rem]">
          <button className="bg-l_blue rounded-lg px-4 py-1">Contact us:</button>
          <p className="text-white mt-4">Email: ask@oneggy.com</p>
          <p className="text-white mt-4">Phone: +91 9811133005</p>
          <p className="text-white mt-4">Address: 172, Block M, Shakurpur New Delhi, Delhi 110034</p>
        </div>
        <div className="bg-greyblack flex px-[40px] py-[58px] rounded-lg">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="w-full px-3 h-16 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 border-white bg-black mr-6
            placeholder:text-white
            "
            required
          />
          <button className="bg-l_blue text-black hover:bg-l_black border hover:border-l_blue hover:text-white px-3 py-4 h-16 rounded-xl w-full">
            Subscribe to blogs
          </button>
        </div>
        </div>
      </div>
      <div className="w-full h-0.5 bg-white my-8"></div>
      <footer className="text-white">
        <p>
          &copy; {new Date().getFullYear()} OnEggy. All Rights Reserved.
        </p>
        <a href="#" className="underline">Privacy Policy</a>
      </footer>
    </div>
  );
};

export default footer;
