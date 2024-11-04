import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logov1 from "../../../public/logov1.png";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import serviceData from "../../../public/data/serviceData.json";

const Footer = () => {
  const services = serviceData.arr;

  return (
    <div className="bg-l_black rounded-tl-3xl rounded-tr-3xl mt-10 px-8 py-8 text-white">
      {/* Top Section with Logo, Links, and Socials */}
      <nav className="flex flex-col items-center sm:flex-row sm:justify-between sm:px-12 py-6">
        <Image src={logov1} alt="Logo" width={165} height={85} className="mb-6 sm:mb-0" />

        <ul className="hidden sm:flex space-x-8 text-center">
          <li><Link href="/about" className="hover:underline">About Us</Link></li>
          <li><Link href="/services" className="hover:underline">Services</Link></li>
          <li><Link href="/team" className="hover:underline">Team</Link></li>
          <li><Link href="/client" className="hover:underline">Portfolio</Link></li>
          <li><Link href="/blogs" className="hover:underline">Blog</Link></li>
        </ul>

        <div className="hidden sm:flex space-x-4">
          <a href="https://www.linkedin.com/company/oneggy" target="_blank" className="bg-white text-l_black w-8 h-8 flex items-center justify-center rounded-full">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://www.facebook.com/oneggytechnologies" target="_blank" className="bg-white text-l_black w-8 h-8 flex items-center justify-center rounded-full">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.instagram.com/oneggytechnologies" target="_blank" className="bg-white text-l_black w-8 h-8 flex items-center justify-center rounded-full">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com/oneggy" target="_blank" className="bg-white text-l_black w-8 h-8 flex items-center justify-center rounded-full">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </nav>

      {/* Contact and Subscription Section */}
      <div className="flex flex-col sm:flex-row sm:space-x-8 mt-8 sm:px-12">
        <div className="sm:w-1/2 mb-8 sm:mb-0">
          <h2 className="bg-l_blue rounded-md p-2 w-32 text-center font-semibold">Contact us</h2>
          <p className="mt-4">Email: <a href="mailto:ask@oneggy.com" className="underline">ask@oneggy.com</a></p>
          <p className="mt-2">Phone: <a href="tel:+919811133005" className="underline">+91 9811133005</a></p>
          <p className="mt-2">Address: 172, Block M, Shakurpur, New Delhi, Delhi 110034</p>
        </div>

        <div className="bg-greyblack p-6 rounded-xl flex flex-col sm:flex-row sm:w-1/2">
          <input
            type="email"
            placeholder="Join our newsletter – your email"
            className="w-full h-12 mb-4 sm:mb-0 sm:mr-4 px-4 text-black rounded-md focus:outline-none"
          />
          <button className="bg-l_blue text-black hover:bg-black hover:text-white rounded-md w-full h-12 sm:w-auto sm:px-6">
            Newsletters
          </button>
        </div>
      </div>

      {/* Social Icons for Mobile */}
      <div className="flex justify-center space-x-4 mt-6 sm:hidden">
        <a href="https://www.linkedin.com/company/oneggy" target="_blank" className="bg-white text-l_black w-8 h-8 flex items-center justify-center rounded-full">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://www.facebook.com/oneggytechnologies" target="_blank" className="bg-white text-l_black w-8 h-8 flex items-center justify-center rounded-full">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://www.instagram.com/oneggytechnologies" target="_blank" className="bg-white text-l_black w-8 h-8 flex items-center justify-center rounded-full">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://twitter.com/oneggy" target="_blank" className="bg-white text-l_black w-8 h-8 flex items-center justify-center rounded-full">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>

      {/* Divider and Legal Links */}
      <hr className="border-gray-700 mt-8 sm:mx-12" />
      <footer className="flex flex-col sm:flex-row sm:justify-between items-center text-center mt-6 sm:mt-4">
        <p>&copy; {new Date().getFullYear()} ONEGGY TECHNOLOGIES OPC PVT LTD.</p>
        <div className="flex flex-col sm:flex-row sm:space-x-8 mt-4 sm:mt-0 text-sm">
          <Link href="/sitemap" className="hover:underline">Sitemap</Link>
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link href="/terms-and-conditions" className="hover:underline">Terms and Conditions</Link>
          <Link href="/refund-policy" className="hover:underline">Refund Policy</Link>
        </div>
      </footer>

      <div className="hidden">
        {services.map((service) => (
          <div key={service["meta-title-slug"]} className="mb-4">
            <h3 className="text-xl font-bold">{service["meta-title"]}</h3>
            <p className="text-sm">{service.content}</p>
            <a
              href={`https://www.oneggy.com/service/${service["meta-title-slug"]}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {service["meta-title"]}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
