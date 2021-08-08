import React from "react";
import harry from "../../../images/harry.png";
import aliza from "../../../images/aliza.png";
import ema from "../../../images/ema.png";
import BlogDetails from "../BlogDetails/BlogDetails";
const blogData = [
  {
    name: "Dr.Moris",
    date: "23 April 2018",
    title: "2 times of brush in a day can keep you healthy ",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic eveniet odit doloremque eaque. Voluptatum, non!",
    img: harry,
  },
  {
    name: "Dr.Neckson",
    date: "23 April 2018",
    title: "2 times of brush in a day can keep you healthy ",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic eveniet odit doloremque eaque. Voluptatum, non!",
    img: ema,
  },
  {
    name: "Dr.Emiliy",
    date: "23 April 2018",
    title: "2 times of brush in a day can keep you healthy ",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic eveniet odit doloremque eaque. Voluptatum, non!",
    img: aliza,
  },
];
const Blogs = () => {
  return (
    <section className="blogs mt-5 pb-5">
      <div className="container">
        <div className="blogHeaders text-center ">
          <h4 style={{ color: " #1cc7c1" }}>OUR BLOG</h4>
          <h1 className="mt-3">From Our Blog News</h1>
        </div>
        <div className="row">
          {blogData.map((blog) => (
            <BlogDetails blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
