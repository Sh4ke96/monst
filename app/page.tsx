import Image from "next/image";

import { Button } from "@/components/index";

export default function Home() {
  return (
    <section className="relative pt-24">
      <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-lightGray -z-50"></div>
      <div className="container">
        <div className="flex flex-wrap items-center -mx-3">
          <div className="w-full lg:w-1/2 px-3">
            <div className="py-12">
              <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl mb-4 font-bold text-black">
                  Committed to <span className="text-blue">People</span>,<br />{" "}
                  Committed to the future
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
  );
}
