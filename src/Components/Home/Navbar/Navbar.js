import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item ">
              <a class="nav-link ms-5" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5" href=".">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link  ms-5" href="/">
                Dental Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link  ms-5" href="/">
                Review
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5" href="/">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
