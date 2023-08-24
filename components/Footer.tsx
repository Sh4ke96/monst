import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer>
      <div className="relative border-t border-gray/10">
        <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-gray/10"></div>
        <div className="container">
          <div className="relative flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 pt-20 px-4 max-w-lg lg:max-w-full mx-auto lg:mx-0 text-center lg:text-left">
              <Link className="inline-block mx-auto lg:ml-0 text-3xl" href="/">
                <Image
                  width={100}
                  height={100}
                  src="/img/monst-logo.svg"
                  alt="monst logo"
                />
              </Link>
              <div className="mt-12 mb-16">
                <p className="mb-4 text-xs text-gray/50 font-light text-center lg:text-left">
                  Subscribe and stay fully connected with product.
                </p>
                <div className="flex flex-wrap lg:flex-nowrap items-center">
                  <div className="">
                    <svg
                      className="h-6 w-6 my-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <input
                      className="w-full py-4 pl-3 text-xs text-blueGray-400 bg-blueGray-50 outline-none"
                      type="text"
                      placeholder="Type your e-mail"
                    />
                  </div>
                  <button
                    className="hover-up-2 w-full lg:w-auto py-4 px-8 lg:ml-6 text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
              <div className="hidden lg:block">
                <p className="text-xs text-blueGray-400">
                  © 2021. All rights reserved.
                </p>
                <div className="-mx-2 mt-4">
                  <a className="inline-block px-2" href="#">
                    <img src="assets/imgs/icons/facebook-blue.svg" alt="" />
                  </a>
                  <a className="inline-block px-2" href="#">
                    <img src="assets/imgs/icons/twitter-blue.svg" alt="" />
                  </a>
                  <a className="inline-block px-2" href="#">
                    <img src="assets/imgs/icons/instagram-blue.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="relative w-full lg:w-1/2 px-4 pt-40 lg:pl-12">
              <div className="flex flex-row flex-wrap justify-around mb-12">
                <div className="w-1/2 lg:w-auto mb-12">
                  <h5 className="mb-6 text-lg font-bold font-heading">About</h5>
                  <ul className="space-y-3">
                    <li>
                      <a
                        className="text-lg text-blueGray-400 hover:text-blueGray-500"
                        href="about.html"
                      >
                        About us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-lg text-blueGray-400 hover:text-blueGray-500"
                        href="portfolio.html"
                      >
                        Portfolio
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-lg text-blueGray-400 hover:text-blueGray-500"
                        href="services.html"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-lg text-blueGray-400 hover:text-blueGray-500"
                        href="contact.html"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-1/2 lg:w-auto mb-12">
                  <h5 className="mb-6 text-lg font-bold font-heading">
                    Quick links
                  </h5>
                  <ul className="space-y-3">
                    <li>
                      <a
                        className="text-lg text-blueGray-400 hover:text-blueGray-500"
                        href="team.html"
                      >
                        Team
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-lg text-blueGray-400 hover:text-blueGray-500"
                        href="pricing.html"
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-lg text-blueGray-400 hover:text-blueGray-500"
                        href="testimonials.html"
                      >
                        Testimonials
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-lg text-blueGray-400 hover:text-blueGray-500"
                        href="faqs.html"
                      >
                        Faqs
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-auto mb-4">
                  <h5 className="mb-6 text-lg font-bold font-heading">Blog</h5>
                  <ul className="space-y-3">
                    <li>
                      <a
                        className="text-lg text-blueGray-400 hover:text-blueGray-500"
                        href="blog.html"
                      >
                        Bussiness
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-lg text-blueGray-400 hover:text-blueGray-500"
                        href="blog-2.html"
                      >
                        Marketing
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-lg text-blueGray-400 hover:text-blueGray-500"
                        href="blog-single.html"
                      >
                        Single
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:hidden text-center">
                <p className="text-xs text-blueGray-400">
                  © 2021. All rights reserved.
                </p>
                <div className="-mx-2 mt-4">
                  <a className="inline-block px-2" href="#">
                    <img src="assets/imgs/icons/facebook-blue.svg" alt="" />
                  </a>
                  <a className="inline-block px-2" href="#">
                    <img src="assets/imgs/icons/twitter-blue.svg" alt="" />
                  </a>
                  <a className="inline-block px-2" href="#">
                    <img src="assets/imgs/icons/instagram-blue.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
