import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black to-gray-800 "
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className=" text-4xl sm:text-7xl font-bold text-white">I'm a Computer Engineer</h2>
          <p className=" text-gray-500 py-4 max-w-md">
            I am a fresh graduate Computer Engineer building and designing
            software applications. Currently, I love working on web application
            using technologies like React, Tailwind, Next JS and GraphQL. You
            can also check out other technologies that I'm working with!
          </p>

          <div>
            <button>
              Portfolio
              <span>
                <MdOutlineKeyboardArrowRight />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className=" rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;