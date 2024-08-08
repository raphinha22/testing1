import React from "react";
import image from "../assets/images/2640761.png";

const Service = () => {
  const service = [
    {
      id: 1,
      img: image,
      title: "Membership Organisations",
    },
    {
      id: 2,
      img: image,
      title: "National Associations",
    },
    {
      id: 3,
      img: image,
      title: "Clubs And Groups",
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGray font-semibold mb-2">
          Our Clients
        </h2>
        <p className="text-neutralDGray text-base">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="text-center">
        <h2 className="mb-2 text-4xl text-neutralDGray font-semibold leading-snug">
          Manage your entire community <br /> in a single system
        </h2>
        <p className="text-base text-neutralDGray">
          Who is Nextcent suitable for?
        </p>
        <div className="mt-[50px] flex justify-around items-center">
          {service.map((items) => {
            return (
              <div key={items.id} className="px-4 py-8 text-center md:w-[300px]
              mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5
              hover:border-b-4 hover:border-indigo-700 transition-all duration-300
              flex items-center justify-center h-full">
                <div className="flex flex-col items-center">
                  <img className="w-[50px] mb-2" src={items.img} alt="" />
                  <h2 className="text-xl font-semibold text-neutralDGray">ko
                    {items.title}
                  </h2>
                  <p></p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
