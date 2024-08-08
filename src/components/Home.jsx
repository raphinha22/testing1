import React from "react";
import { Carousel } from "flowbite-react";
import img from "../assets/images/download (15).png";

const Home = () => {
  return (
    <div className="bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel
          onSlideChange={(index) => console.log("onSlideChange()", index)}
        >
          {/* slide one */}
          <div className="flex flex-row-reverse h-full items-center justify-center">
            <div className="">
              <img className="w-[500px]" src={img} alt="" />
            </div>
            <div className="">
              <h1 className="text-5xl font-bold mb-4 text-neutralDGray md:w-3/4 leading-snug">
                Lessons and insights{" "}
                <span className="text-branPrimary">from 8 years</span>
              </h1>
              <p className="text-base mb-8 text-neutralDGray">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Impedit, necessitatibus.
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
          {/* slide two */}
          <div className="flex flex-row-reverse h-full items-center justify-center">
            <div className="">
              <img className="image_home" src={img} alt="" />
            </div>
            <div className="">
              <h1 className="text-5xl font-bold mb-4 text-neutralDGray md:w-3/4 leading-snug">
                Learn and Earn Money{" "}
                <span className="text-branPrimary">from 4 years</span>
              </h1>
              <p className="text-base mb-8 text-neutralDGray">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Impedit, necessitatibus.
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
          {/* slide three */}
          <div className="flex flex-row-reverse h-full items-center justify-center">
            <div className="">
              <img className="image_home" src={img} alt="" />
            </div>
            <div className="">
              <h1 className="text-5xl font-bold mb-4 text-neutralDGray md:w-3/4 leading-snug">
                Lessons and insights{" "}
                <span className="text-branPrimary">from 8 years</span>
              </h1>
              <p className="text-base mb-8 text-neutralDGray">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Impedit, necessitatibus.
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
