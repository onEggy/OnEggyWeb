import { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";
import logov1 from "../../../public/logov1.png";

const navigation = [
  { name: "About Us", href: "/about", current: true },
  { name: "Services", href: "/services", current: false },
  { name: "Team", href: "/team", current: false },
  { name: "Portfolio", href: "/client", current: false },
  { name: "Blogs", href: "/blogs", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
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
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-2">
            <div className="relative flex h-14 items-center justify-between">
              
              {/* Mobile Logo */}
              <div className="flex items-center lg:hidden">
                <Link href="/">
                  <Image 
                    src={logov1} 
                    alt="OnEggy Technologies Cloud & DevOps Company logo" 
                    className="w-20 sm:w-24 md:w-28 lg:hidden h-auto" // Reduced sizes for a more compact mobile view
                    priority
                  />
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-200 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Desktop Logo and Navigation */}
              <nav className="hidden lg:flex lg:items-center lg:justify-between w-full">
                <div className="flex items-center">
                  <Link href="/">
                    <Image 
                      src={logov1} 
                      alt="OnEggy Technologies Cloud & DevOps Company logo" 
                      className="w-20 lg:w-24 xl:w-28 h-auto" // Desktop sizes remain compact
                      priority
                    />
                  </Link>
                </div>
                <ul className="flex space-x-6 ml-6">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className={`text-gray-800 hover:text-blue-500 ${isLinkActive(item.href)}`}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/contact" className="text-black py-2 px-4 rounded-md border border-black hover:bg-black hover:text-white">
                      Request a Quote
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-4 pt-2 pb-3 bg-white shadow-md">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className={classNames(
                    router.pathname === item.href
                      ? "bg-blue-100 text-blue-800"
                      : "text-gray-800 hover:bg-gray-100",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <Disclosure.Button
                as={Link}
                href="/contact"
                className="block text-center text-black py-2 px-4 mt-1 rounded-md border border-black hover:bg-black hover:text-white"
              >
                Request a Quote
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
