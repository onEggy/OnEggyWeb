import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../public/logoWhite.png";
import logov1 from "../../../public/logov1.png";
import {
    faFacebookF,
    faTwitter,
    faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import serviceData from '../../../public/data/serviceData.json';

const FooterDevops = () => {
    const services = serviceData.arr;

    return (
        // <div className="w-full">
        <div className=" font-inter  bg-l_black px-[16px] md:px-[4rem] rounded-t-[49px] md:rounded-t-[0px]">
            <nav className="py-10 flex flex-col sm:flex-row justify-between w-full px-12">
                <Image
                    src={logov1}
                    alt="Logo"
                    width="165"
                    height="85"
                    className="logo_img"
                />
                <ul className="justify-center py-4 text-white underline hidden sm:flex">
                    <li className="mx-5 cursor-pointer"><Link href={'/about'}> About us </Link></li>
                    <li className="mx-5 cursor-pointer"><Link href={'/services'}> Service </Link></li>
                    <li className="mx-5 cursor-pointer"><Link href={'/team'}> Team </Link></li>
                    <li className="mx-5 cursor-pointer"> <Link href={'/client'}> Portfolio</Link></li>
                    <li className="mx-5 cursor-pointer"><Link href={'/blogs'}>Blog </Link></li>
                </ul>
                <div className=" space-x-4 self-center hidden sm:flex">
                    <div className="bg-white w-8 h-8 flex justify-center items-center rounded-full text-l_black">
                        <a href="https://www.linkedin.com/company/oneggy" target="_blank"> <FontAwesomeIcon icon={faLinkedinIn} /> </a>
                    </div>
                    <div className="bg-white  w-8 h-8 flex justify-center items-center rounded-full text-l_black">
                        <a href="https://www.facebook.com/oneggytechnologies" target="_blank"><FontAwesomeIcon icon={faFacebookF} /> </a>
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
                    <p className="text-white mt-4 md:w-1/2 w-4/6 text-center sm:text-left">
                        Address: 172, Block M, Shakurpur New Delhi, Delhi 110034
                    </p>
                </div>
                <div className="bg-greyblack flex sm:flex-row flex-col p-6 sm:xspace-x-4 rounded-2xl mb-4 sm:mb-12 mt-8 sm:mt-0 sm:w-1/2 w-full">
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



            <div className="flex space-x-4 justify-center sm:hidden mt-4 mb-8">

                <div className="bg-white w-8 h-8 flex justify-center items-center rounded-full text-l_black">
                    <a href="https://www.linkedin.com/company/oneggy" target="_blank"> <FontAwesomeIcon icon={faLinkedinIn} /> </a>
                </div>
                <div className="bg-white  w-8 h-8 flex justify-center items-center rounded-full text-l_black">
                    <a href="https://www.facebook.com/oneggytechnologies" target="_blank"><FontAwesomeIcon icon={faFacebookF} /> </a>
                </div>
                <div className="bg-white  w-8 h-8 flex justify-center items-center rounded-full text-l_black">
                    <FontAwesomeIcon icon={faTwitter} />
                </div>
            </div>
            <hr className="mx-auto w-[94%]" />
            {/* <footer className="text-white px-4 mt-10 flex flex-col space-y-2 pb-10 md:flex-row md:justify-between md:items-center"> */}
            <footer className="text-white px-4 mt-10 flex flex-col space-y-2 pb-10 md:flex-row md:justify-start md:items-center md:w-10/12 ml-4 ">
                <p className="mt-2">&copy; {new Date().getFullYear()} OnEggy. All Rights Reserved.</p>
                <a href="/privacy-policy" className="text-center ">
                    Privacy Policy
                </a>
            </footer>
        </div>
        // </div>
    );
};

export default FooterDevops;
