import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative sm:h-screen h-1/2  ">
      <img
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-60  sm:h-screen h-full">
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-center xl:flex-row">
            <div className="w-full max-w-5xl my-12 xl:mb-0 xl:pr-16 xl:w-10/12">
              <h2 className="max-w-4xl mb-6 font-sans text-3xl h-8 px-23 sm:xl font-bold tracking-tight text-white sm:text-6xl sm:leading-none">
                Searching For A Job? <br className="block" />
                <span className="text-teal-accent-400 font-thin text-2xl sm:text-6xl">
                  Your Dream Job
                  <br className="hidden md:block" /> Is Waiting
                </span>
              </h2>
              <p className="max-w-xl mb-4  text-base text-gray-300 md:text-2xl sm:pt-40 pt-6">
                Find The Best Startup Job That Fits You From Thouands Of Job
                Posted Last Week
              </p>
              <div className="flex items-center">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center h-8 px-2 sm:h-12 sm:px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-sky-100 hover:text-black focus:shadow-outline focus:outline-none text-xs sm:text-lg"
                >
                  Find A Job
                </Link>
                <Link
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold h-8 px-2 sm:h-12 sm:px-6 bg-sky-100 hover:bg-blue-600 hover:text-white text-sky-700 transition-colors rounded duration-200 hover:text-deep-purple-accent-700 text-xs sm:text-lg"
                >
                  Find A Candidate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
