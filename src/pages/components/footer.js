import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../public/logoWhite.png";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const footer = () => {
  return (
    // <div className="w-full">
    <div className=" bg-l_black rounded-tl-[3rem] rounded-tr-[3rem] mt-10 px-8">
      <nav className="py-10 flex flex-col sm:flex-row justify-between w-full px-12">
        <Image
          src={logo}
          alt="Logo"
          width="165"
          height="55"
          className="logo_img"
        />
        <ul className="justify-center py-4 text-white underline hidden sm:flex">
          <li className="mx-5 cursor-pointer">About us</li>
          <li className="mx-5 cursor-pointer">Service</li>
          <li className="mx-5 cursor-pointer">Team</li>
          <li className="mx-5 cursor-pointer">Portfolio</li>
          <li className="mx-5 cursor-pointer">Blog</li>
        </ul>
        <div className=" space-x-4 self-center hidden sm:flex">
          <div className="bg-white w-8 h-8 flex justify-center items-center rounded-full text-l_black">
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
          <div className="bg-white  w-8 h-8 flex justify-center items-center rounded-full text-l_black">
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
          <div className="bg-white  w-8 h-8 flex justify-center items-center rounded-full text-l_black">
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
      </nav>

      <div className="flex sm:flex-row flex-col sm:ml-10 sm:mr-10 sm:mt-5">
        <div className="sm:w-1/2 w-full sm:block flex items-center flex-col">
          <h2 className="bg-l_blue rounded-md mb-4 sm:mb-0 p-1 w-28 font-semibold text-center sm:text-left">
            Contact us:
          </h2>
          <p className="text-white mt-4">
            Email: <span className="underline">ask@oneggy.com</span>
          </p>
          <p className="text-white mt-4">
            Phone: <span className="underline">+91 9811133005</span>
          </p>
          <p className="text-white mt-4 sm:w-1/2 w-2/6 text-center sm:text-left">
            Address: 172, Block M, Shakurpur New Delhi, Delhi 110034
          </p>
        </div>
        <div className="bg-greyblack flex sm:flex-row flex-col p-6 sm:xspace-x-4 rounded-2xl mb-4 sm:mb-12 mt-4 sm:mt-0 sm:w-1/2 w-full">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="w-full px-3 h-14 py-3 sm:my-10 border placeholder-white bg-greyblack rounded-lg focus:outline-none focus:ring focus:border-blue-300 border-white
              sm:mr-4"
            required
          />
          <button className="bg-l_blue text-black hover:bg-l_black border hover:border-l_blue hover:text-white px-3 h-14 py-3 sm:mt-10 sm:mb-10 mt-4 rounded-xl w-full">
            Subscribe to blogs
          </button>
        </div>
      </div>
      <div className="flex space-x-4 justify-center sm:hidden mt-4 mb-8">
        <div className="bg-white w-8 h-8 flex justify-center items-center rounded-full text-l_black">
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
        <div className="bg-white  w-8 h-8 flex justify-center items-center rounded-full text-l_black">
          <FontAwesomeIcon icon={faFacebookF} />
        </div>
        <div className="bg-white  w-8 h-8 flex justify-center items-center rounded-full text-l_black">
          <FontAwesomeIcon icon={faTwitter} />
        </div>
      </div>
      <hr className="mx-auto w-[94%]" />
      <footer className="text-white px-4 mt-10 flex justify-between  space-x-8 pb-10">
        <p>&copy; {new Date().getFullYear()} OnEggy. All Rights Reserved.</p>
        <a href="#" className="underline">
          Privacy Policy
        </a>
      </footer>
    </div>
    // </div>
  );
};

export default footer;
