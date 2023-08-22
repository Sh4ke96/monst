import Image from "next/image";

import { Button, KeyCard } from "@/components/index";

export default function Home() {
  return (
    <>
      <section className="relative pt-24">
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
                    <Button
                      type="button"
                      color="primary"
                      textColor="white"
                      border="base"
                    >
                      Key features
                    </Button>
                    <Button
                      type="button"
                      color="secondary"
                      textColor="gray"
                      border="outline-gray"
                    >
                      How We Work?
                    </Button>
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
      <section>
        <div className="container mt-16">
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              }
              title="IT Consultancy"
              text="We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success."
            />
            <KeyCard
              icon={
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              }
              title="Web Development"
              text="We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success."
            />
            <KeyCard
              icon={
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
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
      <section>
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
    </>
  );
}
