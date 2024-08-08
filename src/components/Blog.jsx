import React from "react";
import image from "../assets/images/images.jpg";

const Blog = () => {
    const blog = [
        {
            id: 1,
            title: "Creating Streamlined Safeguarding Processes with OneRen",
            image: image,
        },
    ]
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl text-neutralDGray font-semibold mb-4">Caring is the new marketing</h2>
        <p className="text-sm text-neutralDGray mb-8 md:w-3/4 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni culpa
          delectus natus inventore distinctio similique consequatur in, numquam
          iure suscipit vel, at repellat esse voluptatum, quas omnis mollitia
          quo neque! Fuga ullam ipsa voluptas maxime, consequatur dolore
          voluptatum incidunt quibusdam!
        </p>
      </div>
      <div>
        {
            blog.map(blog => 
                <div className="" key={blog.id}>
                    <img src={blog.image} alt="" />
                    <div className="">
                        <h3>{blog.title}</h3>
                    </div>
                </div>
            )
        }
      </div>
    </div>
  );
};

export default Blog;
