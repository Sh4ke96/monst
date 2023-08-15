import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/index";

const Navbar = () => {
  return (
    <header className="bg-white w-full">
      <nav className="container h-20 flex items-center">
        <div className="flex flex-wrap items-center justify-between py-4 gap-x-12 w-full">
          <Link href="/" className="flex items-center">
            <Image
              src="/img/monst-logo.svg"
              alt="monst logo"
              width={125}
              height={40}
            />
          </Link>
          <div className="flex md:order-2 gap-x-8">
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
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
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
