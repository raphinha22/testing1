import React from "react";
import image from "../assets/images/images.jpg";

const Blog = () => {
  const blog = [
    {
      id: 1,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      image: image,
    },
    {
      id: 2,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      image: image,
    },
    {
      id: 3,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      image: image,
    },
  ];
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl text-neutralDGray font-semibold mb-4">
          Caring is the new marketing
        </h2>
        <p className="text-sm text-neutralDGray mb-8 md:w-3/4 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni culpa
          delectus natus inventore distinctio similique consequatur in, numquam
          iure suscipit vel, at repellat esse voluptatum, quas omnis mollitia
          quo neque!
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8 items-center justify-between">
        {blog.map((blog) => (
          <div className="mx-auto relative mb-12 cursor-pointer" key={blog.id}>
            <img src={blog.image} alt="" className="rounded-md w-[400px] transition-all duration-300 hover:scale-[1.1]"/>
            <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
              <h3>{blog.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
