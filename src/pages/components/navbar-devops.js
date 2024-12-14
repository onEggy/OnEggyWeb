import { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";
import logov1 from "../../../public/logodevops.png";

const navigation = [
    { name: "About Us", href: "/about", current: true },
    { name: "Services", href: "/services", current: false },
    { name: "Team", href: "/team", current: false },
    { name: "Portfolio", href: "/client", current: false },
    { name: "Blog", href: "/blogs", current: false },
    { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function NavbarDevops() {
    const router = useRouter();

    const isLinkActive = (href) => {
        return router.pathname === href ? "font-bold" : "font-normal";
    };

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 200;

            setIsSticky(scrollPosition > threshold);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Disclosure as="nav" className={`lg:sticky top-0 z-50 bg-white`}>
            {({ open }) => (
                <>
                    <div className="mx-auto mt-4 max-w-7xl px-2 md:px-6 lg:px-4 md:pt-2">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex flex-shrink-0 items-center lg:hidden">
                                <a href="/">
                                    <Image src={logov1} alt="OnEggy Technologies Cloud & DevOps Company logo" width="305" height="61.17" />
                                </a>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center lg:hidden order-2">
                                {/* Mobile menu button*/}
                                {/* <Disclosure.Button
                  className="relative inline-flex items-center justify-end 
                rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button> */}
                            </div>
                            <nav className="py-4 lg:flex lg:justify-around xl:justify-between mx-auto hidden lg:w-full order-1" style={{ marginTop: '20px' }}>
                                <div className="flex flex-shrink-0 items-center">
                                    <a href="/">
                                        <Image src={logov1} alt="OnEggy Technologies Cloud & DevOps Company logo" width="305" height="61.87" />
                                    </a>
                                </div>

                                <div className="hidden lg:ml-6 sm:block space-x-4">
                                    <button className="text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#191A23] ring-2 ring-[#191A23] rounded-[70.24px] px-6 py-2">
                                        Book a 30-min Call
                                    </button>
                                    <button className="text-white bg-[#191A23] hover:bg-gray-700 hover:text-white border border-[#191A23] focus:outline-none rounded-[70.24px] px-6 py-2">
                                        Let's Talk
                                    </button>
                                </div>

                            </nav>
                        </div>
                    </div>

                    {/* <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.href === router.pathname
                      ? "bg-[#37FFF4] text-black"
                      : "text-gray-700 hover:bg-[#37FFF4] hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel> */}
                </>
            )}
        </Disclosure>
    );
}
