import { FC } from "react";
import "animate.css";

import { Button } from "@/components";
import Image from "next/image";
import Link from "next/link";

const RegisterPage: FC = () => {
  return (
    <section className="bg-blue/10">
      <div className="container py-16">
        <div className="mx-auto mt-12 mb-8 p-8 bg-white rounded-xl shadow-lg max-w-lg animate__animated animate__fadeIn">
          <h4 className="mb-6 text-3xl text-center">Create an Account</h4>
          <div className="flex mb-6 px-4 relative">
            <input
              className="w-full py-4 text-xs placeholder-gray/50 font-semibold leading-none bg-gray/10 rounded-md border-none text-blue outline-none"
              type="email"
              placeholder="Username"
            />
            <svg
              className="h-6 w-6 ml-4 my-auto text-blueGray-300 absolute translate-y-1/2 right-8"
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
          <div className="flex mb-6 px-4 relative">
            <input
              className="w-full py-4 text-xs placeholder-gray/50 font-semibold leading-none bg-gray/10 rounded-md border-none text-blue outline-none"
              type="email"
              placeholder="Email"
            />
            <svg
              className="h-6 w-6 ml-4 my-auto text-blueGray-300 absolute translate-y-1/2 right-8"
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
          <div className="flex mb-6 px-4 relative">
            <input
              className="w-full py-4 text-xs placeholder-gray/50 font-semibold leading-none bg-gray/10 rounded-md border-none text-blue outline-none"
              type="password"
              placeholder="Enter your password"
            />
            <button className="ml-4 absolute translate-y-1/2 right-8">
              <svg
                className="h-6 w-6 my-auto text-blueGray-300"
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
            </button>
          </div>
          <div className="flex mb-6 px-4 relative">
            <input
              className="w-full py-4 text-xs placeholder-gray/50 font-semibold leading-none bg-gray/10 rounded-md border-none text-blue outline-none"
              type="password"
              placeholder="Confirm password"
            />
            <button className="ml-4 absolute translate-y-1/2 right-8">
              <svg
                className="h-6 w-6 my-auto text-blueGray-300"
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
            </button>
          </div>
          <div className="px-4 mb-8">
            <label className="inline-flex text-xs">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">
                I agree to{" "}
                <Link
                  href="/privacy"
                  className="underline hover:text-blueGray-500"
                >
                  Police privacy
                </Link>{" "}
                and{" "}
                <Link
                  href="/terms"
                  className="underline hover:text-blueGray-500"
                >
                  Terms of Use
                </Link>
              </span>
            </label>
          </div>
          <div className="flex flex-col">
            <Button
              type="button"
              color="primary"
              width="full"
              textColor="white"
              border="base"
            >
              Sign Up Now
            </Button>
            <p className="my-6 text-xs text-gray/70 text-center font-semibold">
              or continue with
            </p>
          </div>
          <div className="flex flex-col gap-y-4">
            <div>
              <button className="transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center px-4 py-3 w-full text-xs text-blueGray-500 font-semibold leading-none border border-gray-200 hover:bg-blueGray-50 rounded">
                <Image
                  src="/img/facebook-sign.svg"
                  alt="google icon"
                  width={30}
                  height={30}
                />
                <span className="ml-8">Sign Up with Facebook</span>
              </button>
            </div>
            <div>
              <button className="transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center px-4 py-3 w-full text-xs text-blueGray-500 font-semibold leading-none border border-gray-200 hover:bg-blueGray-50 rounded">
                <Image
                  src="/img/google-sign.svg"
                  alt="google icon"
                  width={30}
                  height={30}
                />
                <span className="ml-8">Sign Up with Google</span>
              </button>
            </div>
          </div>
          <div className="w-full mt-12 mx-auto text-center">
            <p className="mb-4">Already have an account?</p>
            <Link href="/login">
              <Button
                type="button"
                color="primary"
                width="full"
                textColor="white"
                border="base"
              >
                Sign In Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
