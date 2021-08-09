import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGooglePlus,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <section className="footer mt-5 pt-5">
      <div className="container row">
        <h4 className="col-md-3"></h4>
        <h4 className="col-md-3">
          <h4 style={{ color: " #1cc7c1" }}>Services</h4>
        </h4>
        <h4 className="col-md-3">
          {" "}
          <h4 style={{ color: " #1cc7c1" }}>Oral Health</h4>
        </h4>
        <h4 className="col-md-3">
          {" "}
          <h4 style={{ color: " #1cc7c1" }}>Our Address</h4>
        </h4>
      </div>
      <div className="container row">
        <div className="col-md-3">
          <a href="/public" className="text-secondary mt-4">
            Emergency Dental Care
          </a>
          <br />
          <a href="/" className="text-secondary">
            Check Up
          </a>

          <br />
          <a href="/node_modules" className="text-secondary">
            Treatment Of Professional Diseas
          </a>
          <br />
          <a href="/" className="text-secondary">
            Tooth Extraction
          </a>
          <br />
          <a href="." className="text-secondary">
            Chceck Up
          </a>
        </div>

        <div className="col-md-3">
          <a href="/public" className="text-secondary">
            Emergency Dental Care
          </a>
          <br />
          <a href="/" className="text-secondary">
            Check Up
          </a>
          <br />
          <a href="/node_modules" className="text-secondary">
            Treatment Of Professional Diseas
          </a>
          <br />
          <a href="/" className="text-secondary">
            Tooth Extraction
          </a>
          <br />
          <a href="." className="text-secondary">
            Chceck Up
          </a>
          <br />
          <a href="." className="text-secondary">
            Chceck Up
          </a>{" "}
          <br />
          <a href="." className="text-secondary">
            Chceck Up
          </a>
        </div>

        <div className="col-md-3">
          <a href="/public" className="text-secondary">
            Emergency Dental Care
          </a>
          <br />
          <a href="/" className="text-secondary">
            Check Up
          </a>
          <br />
          <a href="/node_modules" className="text-secondary">
            Treatment Of Professional Diseas
          </a>
          <br />
          <a href="/" className="text-secondary">
            Tooth Extraction
          </a>
          <br />
          <a href="." className="text-secondary">
            Chceck Up
          </a>
          <br />
          <a href="." className="text-secondary">
            Chceck Up
          </a>
          <br />
          <a href="." className="text-secondary">
            Chceck Up
          </a>
        </div>

        <div className="col-md-3">
          <div className="row">
            <a className="text-secondary mt-2" href="/">
              New york -101010 Hadson <br /> Yards
            </a>
          </div>
          <div className="d-flex-row justify-content-center mt-4">
            <a href="/">
              <FontAwesomeIcon color="gray" size="3x" icon={faFacebook} />
            </a>
            <a href="/">
              <FontAwesomeIcon
                className="ms-3"
                size="3x"
                color="gray"
                icon={faGooglePlus}
              />
            </a>
            <a href="/">
              <FontAwesomeIcon
                color="gray"
                className="ms-3"
                size="3x"
                icon={faTwitter}
              />
            </a>
          </div>
          <div className="callDiv mt-5">
            <small className="text-secondary">Call now</small>
            <br />
            <button
              style={{
                backgroundColor: " #1cc7c1",
                color: "white",
                borderRadius: "none ",
              }}
              className="btn"
            >
              +011422413
            </button>
          </div>
        </div>
      </div>
      <p className="text-center text-secondary mt-5 pt-5">
        Copyright{new Date().getFullYear()}All Rights Reserved
      </p>
    </section>
  );
};

export default Footer;
