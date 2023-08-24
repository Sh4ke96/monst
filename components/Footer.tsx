import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/index";

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
                  <div className="relative mr-4 lg:mr-8 basis-2/3">
                    <svg
                      className="h-6 w-6 my-auto absolute bottom-1/2 translate-y-1/2 right-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#3B82F6"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <input
                      className="w-full py-4 text-xs placeholder-gray/50 font-semibold leading-none bg-gray/10 rounded-md border-none text-blue outline-none"
                      type="text"
                      placeholder="Type your e-mail"
                    />
                  </div>
                  <Button
                    type="submit"
                    color="primary"
                    textColor="white"
                    border="base"
                    width="fit"
                  >
                    Submit
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <p className="text-xs text-gray/50">
                  © 2023. All rights reserved.
                </p>
                <div className="-mx-2 mt-4">
                  <Link className="inline-block px-2" href="#">
                    <Image
                      src="/img/facebook-blue.svg"
                      alt="facebook-logo"
                      width={24}
                      height={24}
                    />
                  </Link>
                  <Link className="inline-block px-2" href="#">
                    <Image
                      src="/img/twitter-blue.svg"
                      width={24}
                      height={24}
                      alt="twitter logo"
                    />
                  </Link>
                  <Link className="inline-block px-2" href="#">
                    <Image
                      src="/img/instagram-blue.svg"
                      width={24}
                      height={24}
                      alt="instagram logo"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative w-full lg:w-1/2 px-4 lg:pt-40 lg:pl-12">
              <div className="flex flex-row flex-wrap justify-around mb-12">
                <div className="w-1/2 lg:w-auto mb-12">
                  <h5 className="mb-6 text-lg font-bold">About</h5>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        className="text-lg text-gray hover:text-gray/50 font-light"
                        href="/about"
                      >
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-lg text-gray hover:text-gray/50 font-light"
                        href="/portfolio"
                      >
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-lg text-gray hover:text-gray/50 font-light"
                        href="services.html"
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-lg text-gray hover:text-gray/50 font-light"
                        href="contact.html"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-1/2 lg:w-auto mb-12">
                  <h5 className="mb-6 text-lg font-bold">Quick links</h5>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        className="text-lg text-gray hover:text-gray/50 font-light"
                        href="/team"
                      >
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-lg text-gray hover:text-gray/50 font-light"
                        href="/pricing"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-lg text-gray hover:text-gray/50 font-light"
                        href="/testimonials"
                      >
                        Testimonials
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-lg text-gray hover:text-gray/50 font-light"
                        href="/faq"
                      >
                        Faqs
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-auto mb-4">
                  <h5 className="mb-6 text-lg font-bold">Blog</h5>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        className="text-lg text-gray hover:text-gray/50 font-light"
                        href="/blog"
                      >
                        Bussiness
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-lg text-gray hover:text-gray/50 font-light"
                        href="/blog"
                      >
                        Marketing
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-lg text-gray hover:text-gray/50 font-light"
                        href="/blog"
                      >
                        Single
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:hidden text-center">
                <p className="text-xs text-gray">
                  © 2023. All rights reserved.
                </p>
                <div className="-mx-2 mt-4">
                  <Link className="inline-block px-2" href="#">
                    <Image
                      src="/img/facebook-blue.svg"
                      alt="facebook-logo"
                      width={24}
                      height={24}
                    />
                  </Link>
                  <Link className="inline-block px-2" href="#">
                    <Image
                      src="/img/twitter-blue.svg"
                      width={24}
                      height={24}
                      alt="twitter logo"
                    />
                  </Link>
                  <Link className="inline-block px-2" href="#">
                    <Image
                      src="/img/instagram-blue.svg"
                      width={24}
                      height={24}
                      alt="instagram logo"
                    />
                  </Link>
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
