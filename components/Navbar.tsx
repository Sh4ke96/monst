"use client";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/index";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu((prevShowMenu) => !prevShowMenu);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setSticky(currentScrollY > 0);
  };

  useEffect(() => {
    if (openMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("scroll", handleScroll);
    };
  }, [openMenu]);

  return (
    <header
      className={`${
        isSticky ? "fixed top-0 shadow-sm" : ""
      } w-full z-10 transition-all bg-white duration-300 animate__animated animate__fadeInDown`}
    >
      <nav className="container h-20 flex items-center">
        <div className="flex items-center justify-between px-4 md:px-0 py-4 gap-x-12 w-full">
          <Link href="/" className="flex items-center">
            <Image
              src="/img/monst-logo.svg"
              alt="monst logo"
              width={125}
              height={40}
            />
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={handleOpenMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="md:order-2 gap-x-8 hidden lg:flex">
            <Link href="/login">
              <Button
                type="button"
                color="secondary"
                border="outline-blue"
                textColor="blue"
              >
                Log In
              </Button>
            </Link>
            <Link href="/register">
              <Button
                type="button"
                color="primary"
                border="base"
                textColor="white"
              >
                Sign Up
              </Button>
            </Link>
          </div>
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-12 md:mt-0 md:border-0 md:bg-white">
              <li className="text-sm hover:text-blue">
                <Link href="/">Home</Link>
              </li>
              <li className="text-sm">
                <Link className="hover:text-blue" href="/about">
                  About Us
                </Link>
              </li>
              <li className="text-sm">
                <Link className="hover:text-blue" href="/services">
                  Services
                </Link>
              </li>
              <li className="text-sm">
                <Link className="hover:text-blue" href="/company">
                  Company
                </Link>
              </li>
              <li className="text-sm">
                <Link className="hover:text-blue" href="/blog">
                  Blog
                </Link>
              </li>
              <li className="text-sm">
                <Link className="hover:text-blue" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {openMenu && (
            <>
              <div
                className="absolute top-0 left-0 h-screen w-screen bg-blue/10 z-40 lg:hidden"
                onClick={handleOpenMenu}
              ></div>
              <div
                className="items-center justify-between lg:hidden absolute top-0 left-0 bg-white h-screen z-50 w-3/4 shadow-lg overflow-y-auto"
                id="mobile-navbar"
              >
                <ul className="flex flex-col gap-y-8 px-8 pb-8 pt-4 font-medium rounded-lg">
                  <div className="flex justify-between">
                    <Link href="/" className="flex items-center">
                      <Image
                        src="/img/monst-logo.svg"
                        alt="monst logo"
                        width={125}
                        height={40}
                      />
                    </Link>
                    <button className="navbar-close" onClick={handleOpenMenu}>
                      <svg
                        className="h-6 w-6 text-blueGray-400 cursor-pointer hover:fill-blue"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <li className="text-lg">
                    <Link href="/" onClick={handleOpenMenu}>
                      Home
                    </Link>
                  </li>
                  <li className="text-lg">
                    <Link href="/about" onClick={handleOpenMenu}>
                      About Us
                    </Link>
                  </li>
                  <li className="text-lg">
                    <Link href="/services" onClick={handleOpenMenu}>
                      Services
                    </Link>
                  </li>
                  <li className="text-lg">
                    <Link href="/company" onClick={handleOpenMenu}>
                      Company
                    </Link>
                  </li>
                  <li className="text-lg">
                    <Link href="/blog" onClick={handleOpenMenu}>
                      Blog
                    </Link>
                  </li>
                  <li className="text-lg">
                    <Link href="/contact" onClick={handleOpenMenu}>
                      Contact
                    </Link>
                  </li>
                </ul>
                <div className="flex flex-col gap-y-4 py-8 mx-8 border-t border-gray/20">
                  <Link href="/login" onClick={handleOpenMenu}>
                    <Button
                      type="button"
                      color="secondary"
                      border="outline-blue"
                      textColor="blue"
                      width="full"
                    >
                      Log In
                    </Button>
                  </Link>
                  <Link href="/register" onClick={handleOpenMenu}>
                    <Button
                      type="button"
                      color="primary"
                      border="base"
                      textColor="white"
                      width="full"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </div>
                <div className="px-8">
                  <p className="my-4 text-xs text-blueGray-400">
                    Get in Touch
                    <Link
                      className="text-blue-500 hover:text-blue-500 underline inline-block ml-1"
                      href="#"
                    >
                      contact@monst.com
                    </Link>
                  </p>
                  <Link className="inline-block px-1" href="#">
                    <Image
                      src="/img/facebook-blue.svg"
                      alt="facebook icon"
                      width={22}
                      height={22}
                    />
                  </Link>
                  <Link className="inline-block px-1" href="#">
                    <Image
                      src="/img/twitter-blue.svg"
                      alt="twitter icon"
                      width={22}
                      height={22}
                    />
                  </Link>
                  <Link className="inline-block px-1" href="#">
                    <Image
                      src="/img/instagram-blue.svg"
                      alt="instagram icon"
                      width={22}
                      height={22}
                    />
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
