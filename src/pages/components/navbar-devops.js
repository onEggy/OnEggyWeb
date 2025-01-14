import { useState, useEffect, useRef } from "react";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import logov1 from "../../../public/logodevops.png";

export default function NavbarDevops({ onScrollToCalConnect }) {
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
        <Disclosure as="nav" className={`lg:sticky top-0 z-50 bg-[radial-gradient(circle_at_top_left,_#37FFF4_-500%,_#ffffff_70%)]`}>
            {({ open }) => (
                <>
                    <div className="mx-auto font-inter pt-[20px] pb-2 max-w-7xl px-2 md:px-6 lg:px-4 md:pt-4">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex flex-shrink-0 items-center lg:hidden">
                                <a href="/">
                                    <Image src={logov1} alt="OnEggy Technologies Cloud & DevOps Company logo" width="305" height="61.87" className="mb-4" />
                                </a>
                            </div>
                            <nav className="py-4 lg:flex lg:justify-around xl:justify-between mx-auto hidden lg:w-full order-1">
                                <div className="flex flex-shrink-0 items-center">
                                    <a href="/">
                                        <Image src={logov1} alt="OnEggy Technologies Cloud & DevOps Company logo" width="305" height="61.87" />
                                    </a>
                                </div>

                                <div className="hidden lg:ml-6 sm:block space-x-4">
                                    <button
                                        className="text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#191A23] ring-2 ring-[#191A23] rounded-[70.24px] px-6 py-2"
                                        onClick={onScrollToCalConnect}
                                    >
                                        Book a 30-min Call
                                    </button>
                                    <button
                                        className="text-white bg-[#191A23] hover:bg-gray-700 hover:text-white border border-[#191A23] focus:outline-none rounded-[70.24px] px-6 py-2"
                                        onClick={onScrollToCalConnect}
                                    >
                                        Let's Talk
                                    </button>
                                </div>
                            </nav>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    );
}
