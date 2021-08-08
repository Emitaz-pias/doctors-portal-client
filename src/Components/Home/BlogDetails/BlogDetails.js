import React from "react";
import "./BlogDetails.css";

const BlogDetails = ({ blog }) => {
  return (
    <div className="col-md-3 mt-5 pt-5 ps-5 ms-5">
      <div
        class="card cardHover p-2 text-center"
        style={{ width: "20rem", height: "20rem" }}
      >
        <div class="  card-body">
          <div className="cardHeader d-flex justify-content-start align-items-start">
            <img src={blog.img} alt="" className="fluid cardImage me-3" />
            <div className="nameandDate">
              <h6
                style={{ color: " #1cc7c1" }}
                className="card-title fw-bold mt-1"
              >
                {blog.name}
              </h6>
              <small className="text-secondary">{blog.date}</small>
            </div>
          </div>
          <div className="cardTitle text-start mt-4 w-75">
            <h6>{blog.title}</h6>
          </div>
          <div className="cardDescription text-start text-secondary">
            <p className="mt-3">{blog.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
