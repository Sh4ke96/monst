import Image from "next/image";

import { Button } from "@/components/index";

export default function Home() {
  return (
    <section className="relative pt-24">
      <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-lightGray -z-50"></div>
      <div className="container">
        <div className="flex flex-wrap items-center -mx-3">
          <div className="w-full lg:w-1/2 px-3">
            <h2 className="text-3xl lg:text-4xl mb-4 font-bold text-black">
              Committed to <span className="text-blue">People</span>,<br />{" "}
              Committed to the future
            </h2>
            <p className="mb-4">
              We are Monst, a Creative Design Social Marketing
            </p>
            <p className="mb-4">
              Helping you maximize operations management with digitization
            </p>
            <div className="flex gap-x-4">
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
          <div className="w-full lg:w-1/2 px-3">
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
