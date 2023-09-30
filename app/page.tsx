"use client";
import Image from "next/image";
import Link from "next/link";

import { Button, KeyCard, AOSComponent } from "@/components/index";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "animate.css";

export default function Home() {
  return (
    <AOSComponent>
      <section className="relative pt-24 animate__animated animate__fadeIn animate__delay-1s">
        <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-lightGray -z-50"></div>
        <div className="container">
          <div className="flex flex-wrap items-center -mx-3">
            <div className="w-full lg:w-1/2 px-3">
              <div className="py-12">
                <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                  <h2 className="text-3xl lg:text-4xl mb-4 font-bold text-black">
                    Committed to <span className="text-blue">People</span>,
                    <br /> Committed to the future
                  </h2>
                  <p className="mb-2 text-gray/50">
                    We are <span className="text-blue">Monst</span>, a Creative
                    Design Social Marketing
                  </p>
                  <p className="mb-8 text-gray/50">
                    Helping you maximize operations management with digitization
                  </p>
                  <div className="flex justify-center lg:justify-normal gap-x-4">
                    <Link href="/#features">
                      <Button
                        type="button"
                        color="primary"
                        textColor="white"
                        border="base"
                      >
                        Key features
                      </Button>
                    </Link>
                    <Link href="/#work">
                      <Button
                        type="button"
                        color="secondary"
                        textColor="gray"
                        border="outline-gray"
                      >
                        How We Work?
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-normal w-full lg:w-1/2 px-3 lg:bg-lightGray mb-12 lg:mb-0 pb-10">
              <Image
                src="/img/hero.svg"
                alt="people eating"
                width={512}
                height={430}
              />
            </div>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="pt-24"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <div className="container mt-24">
          <div className="flex flex-wrap items-center gap-y-4 lg:gap-y-0">
            <div className="w-full lg:w-1/2">
              <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 text-center lg:text-left">
                <h2 className="leading-3 text-3xl lg:text-4xl font-bold text-black">
                  Saas Solutions for <br />
                  <span className="text-blue">your Business</span> Grow <br />{" "}
                  on time
                </h2>
              </div>
            </div>
            <div className="w-full lg:w-1/3">
              <p className="text-gray/50 leading-8 text-center lg:text-left">
                Business solution company sit our any how site used the our
                company any site us it-solve theme is very professional theme
                business & corporate, finance, advisor, solution, company and
                all project used, there are all kinds of websites here.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-16">
            <KeyCard
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              }
              title="IT Consultancy"
              text="We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success."
            />
            <KeyCard
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              }
              title="Web Development"
              text="We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success."
            />
            <KeyCard
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              }
              title="App Development"
              text="We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success."
            />
            <KeyCard
              icon={
                <>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  ></path>
                </>
              }
              title="Digital Marketing"
              text="We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success."
            />
          </div>
        </div>
      </section>
      <section
        id="work"
        className="pt-24"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <div className="container mt-24">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2">
              <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 text-center lg:text-left">
                <h2 className="leading-3 text-3xl lg:text-4xl font-bold text-black">
                  Great Things In <br />
                  Business Are <span className="text-blue">Never Done </span>
                  By One Person.
                </h2>
                <p className="text-gray/50 leading-8 text-center lg:text-left my-8 font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  sagittis, quam nec venenatis lobortis, mi risus tempus nulla,
                  sed porttitor est nibh at nulla. Praesent placerat enim ut ex
                  tincidunt vehicula. Fusce sit amet dui tellus.
                </p>
                <Button
                  type="button"
                  color="primary"
                  textColor="white"
                  border="base"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="w-full mt-8 lg:w-1/2 lg:mt-0">
              <div className="flex flex-col gap-y-12">
                <div className="flex gap-x-8">
                  <div>
                    <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue/20 text-blue">
                      1
                    </span>
                  </div>
                  <div className="flex flex-col mt-4">
                    <h3 className="text-black text-xl">
                      Project Initialization
                    </h3>
                    <p className="text-gray/50 leading-8 text-left mt-4 font-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                      <br /> Sed luctus eget justo et iaculis.
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-8">
                  <div>
                    <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue/20 text-blue">
                      2
                    </span>
                  </div>
                  <div className="flex flex-col mt-4">
                    <h3 className="text-black text-xl">Looking for Creative</h3>
                    <p className="text-gray/50 leading-8 text-left mt-4 font-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                      <br /> Sed luctus eget justo et iaculis.
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-8">
                  <div>
                    <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue/20 text-blue">
                      3
                    </span>
                  </div>
                  <div className="flex flex-col mt-4">
                    <h3 className="text-black text-xl">Market Development</h3>
                    <p className="text-gray/50 leading-8 text-left mt-4 font-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                      <br /> Sed luctus eget justo et iaculis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <div className="container my-24">
          <div className="flex flex-col lg:flex-row gap-x-16">
            <div className="w-full lg:w-1/3">
              <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 text-center lg:text-left">
                <h2 className="leading-3 text-3xl lg:text-4xl font-bold text-black">
                  Simple
                  <br />
                  Solution for <br />{" "}
                  <span className="text-blue">Complex </span> <br />
                  Connections
                </h2>
                <p className="text-gray/50 leading-8 text-center lg:text-left my-8 font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  luctus eget justo et iaculis.
                </p>
              </div>
              <div className="flex gap-x-8 mb-8 justify-center lg:mb-0 lg:justify-normal">
                <button className="slider-prev">
                  <span>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="#3B82F6"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16l-4-4m0 0l4-4m-4 4h18"
                      ></path>
                    </svg>
                  </span>
                </button>
                <button className="slider-next">
                  <span>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="#3B82F6"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-2/3">
              <Swiper
                modules={[Navigation, EffectFade]}
                effect={"fade"}
                navigation={{
                  enabled: true,
                  prevEl: ".slider-prev",
                  nextEl: ".slider-next",
                }}
                loop={true}
                autoplay={true}
                keyboard={{ enabled: true }}
              >
                <SwiperSlide>
                  <Image
                    className="rounded-lg"
                    src="/img/slider/slide-1.png"
                    alt="slide1"
                    width={855}
                    height={440}
                    quality={100}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="rounded-lg"
                    src="/img/slider/slide-2.png"
                    alt="slide1"
                    width={855}
                    height={440}
                    quality={100}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="rounded-lg"
                    src="/img/slider/slide-3.png"
                    alt="slide1"
                    width={855}
                    height={440}
                    quality={100}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <div className="container bg-home py-16 bg-no-repeat bg-cover bg-top">
          <div className="flex flex-col items-center gap-y-8">
            <h2 className="text-3xl text-black font-bold leading-3 text-center">
              Choose Your <br />
              <span className="text-blue">Best</span> Pricing Plan
            </h2>
            <p className="text-base text-gray/50 font-light text-center">
              Great Things In Business Are Never Done By One Person
            </p>
            <div className="flex lg:gap-x-16 lg:flex-row flex-col gap-y-4">
              <label className="flex items-center gap-x-4">
                <input type="radio" name="billing" value={1} />
                <p>Monthly Billing</p>
                <span className="inline-flex items-center justify-center w-12 h-10 bg-blue text-white font-semibold rounded">
                  $59
                </span>
              </label>
              <label className="flex items-center gap-x-4">
                <input type="radio" name="billing" value={2} />
                <p>Annual Billing</p>
                <span className="inline-flex items-center justify-center w-12 h-10 bg-blue text-white font-semibold rounded">
                  $99
                </span>
              </label>
            </div>
          </div>
          <div className="flex my-8 lg:mx-16 md:flex-row flex-col">
            <div className="w-full md:w-1/2 lg:w-2/5 bg-white px-4 py-8 lg:rounded-l-xl">
              <div className="text-center">
                <p className="text-gray/50 font-light">Sign In</p>
                <h4 className="mb-6 text-2xl text-black font-bold">
                  Setup your payment
                </h4>
                <div className="flex mb-4 relative mx-8">
                  <input
                    className="w-full py-4 text-xs placeholder-gray/50 font-semibold leading-none bg-gray/10 rounded-md border-none text-blue outline-none"
                    type="email"
                    placeholder="name@email.com"
                  />
                  <svg
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 my-auto text-gray/50"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex mb-6 relative mx-8">
                <input
                  className="w-full py-4 text-xs placeholder-gray/50 font-semibold leading-none bg-gray/10 rounded-md border-none text-blue outline-none"
                  type="password"
                  placeholder="Enter your password"
                />
                <svg
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 my-auto text-gray/50"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
              </div>
              <div className="text-left mb-4 text-sm text-gray mx-8">
                <label className="mb-8 inline-block">
                  <input type="checkbox" name="terms" value="1" />
                  <span className="ml-2">I agree to terms and conditions.</span>
                </label>
                <Button
                  type="button"
                  color="primary"
                  textColor="white"
                  border="base"
                  width="full"
                >
                  Purchase Now
                </Button>
              </div>
            </div>
            <div className="relative w-full md:w-1/2 lg:w-3/5 bg-blue lg:rounded-r-xl">
              <div className="max-w-sm px-12 pt-12">
                <span className="text-xs text-white mb-4 block">
                  Various Analysis Options
                </span>
                <h3 className="mb-4 text-4xl font-bold text-white">
                  Techno Provides Realtime Best Data Solutions.
                </h3>
              </div>
              <div className="absolute right-0 bottom-0">
                <div className="flex items-center h-full">
                  <Image
                    src="/img/online-shopping.png"
                    alt="online shopping"
                    width={180}
                    height={320}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <div className="container my-16">
          <div className="text-center">
            <h3 className="text-black font-bold text-3xl">Get in touch!</h3>
            <p className="text-gray/50 text-base font-light">
              We will be glad to hear from you
            </p>
          </div>
          <div className="flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row justify-center my-8 gap-x-16">
            <div className="flex flex-col items-center justify-center">
              <svg
                className="mb-6 h-8 w-8 mx-auto text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#3B82F6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              <p className="text-gray/50 font-light text-base mb-3">Phone</p>
              <p className="text-black font-light">+ 48 654-430-309</p>
              <p className="text-black font-light">+ 1 6532-430-309</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <svg
                className="mb-6 h-8 w-8 mx-auto text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#3B82F6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              <p className="text-gray/50 font-light text-base mb-3">E-mail</p>
              <p className="text-black font-light">contact@monst.com</p>
              <p className="text-black font-light">pat@example.com</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <svg
                className="mb-6 h-8 w-8 mx-auto text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#3B82F6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <p className="text-gray/50 font-light text-base mb-3">Address</p>
              <p className="text-black font-light">+ 48 654-430-309</p>
              <p className="text-black font-light">+ 1 6532-430-309</p>
            </div>
          </div>
        </div>
        <div className="container my-16">
          <form className="lg:mx-48">
            <div className="mb-4 text-sm">
              <span className="mr-4">Departament:</span>
              <label className="mr-4">
                <input
                  className="mr-1"
                  type="radio"
                  name="department"
                  value="1"
                />
                <span>Support</span>
              </label>
              <label>
                <input
                  className="mr-1"
                  type="radio"
                  name="department"
                  value="2"
                />
                <span>Sales</span>
              </label>
            </div>
            <div className="flex flex-wrap mb-4 -mx-3 wow animate__ animate__fadeInUp animated animated">
              <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
                <div className="mb-4">
                  <input
                    className="w-full py-4 text-xs placeholder-gray/50 font-semibold leading-none bg-gray/10 rounded-md border-none text-blue outline-none"
                    type="text"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="w-full py-4 text-xs placeholder-gray/50 font-semibold leading-none bg-gray/10 rounded-md border-none text-blue outline-none"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="w-full py-4 text-xs placeholder-gray/50 font-semibold leading-none bg-gray/10 rounded-md border-none text-blue outline-none"
                    type="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div>
                  <label className="flex px-2 bg-gray/10 rounded">
                    <input className="hidden" type="file" name="Choose file" />
                    <span className="my-1 ml-auto px-4 py-3 text-xs text-white leading-none bg-gray hover:bg-blueGray-600 rounded cursor-pointer">
                      {" "}
                      Browse
                    </span>
                  </label>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-3">
                <textarea
                  className="w-full h-full py-4 text-xs placeholder-gray/50 font-semibold leading-none bg-gray/10 rounded-md border-none text-blue outline-none"
                  placeholder="Message..."
                ></textarea>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <label className="mb-8 inline-block">
                <input type="checkbox" name="terms" value="1" />
                <span className="ml-2">I agree to terms and conditions.</span>
              </label>
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
          </form>
        </div>
      </section>
    </AOSComponent>
  );
}
