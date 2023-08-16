import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/index";

const Navbar = () => {
  return (
    <header className="bg-transparent relative z-10 shadow-sm">
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
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="md:order-2 gap-x-8 hidden lg:flex">
            <Button
              type="button"
              color="secondary"
              border="outline-blue"
              textColor="blue"
            >
              Log In
            </Button>
            <Button
              type="button"
              color="primary"
              border="base"
              textColor="white"
            >
              Sign Up
            </Button>
          </div>
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-12 md:mt-0 md:border-0 md:bg-white">
              <li className="text-sm">
                <Link href="/">Home</Link>
              </li>
              <li className="text-sm">
                <Link href="/">About Us</Link>
              </li>
              <li className="text-sm">
                <Link href="/">Services</Link>
              </li>
              <li className="text-sm">
                <Link href="/">Company</Link>
              </li>
              <li className="text-sm">
                <Link href="/">Blog</Link>
              </li>
              <li className="text-sm">
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
