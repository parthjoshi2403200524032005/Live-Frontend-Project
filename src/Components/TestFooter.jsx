import React from "react";
import "./TestFooter.css";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const TestFooter = () => {
  return (
    <footer>
      <div className="top">
        <div className="pages">
          <ul>
            <h3 className="fh">Suggestions</h3>
            <li>
              <a href="#">Top 10 Hospitals</a>
            </li>
            <li>
              <a href="#">Top 10 Doctors</a>
            </li>
            <li>
              <a href="#">Most Chosen Treatments</a>
            </li>
          </ul>

          <ul>
            <h3 className="fh">Services</h3>
            <li>
              <a>
                <Link to="/videos">Home</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/doctors">Find A Doctor</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/plans">Plans</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="hospitals">Add your Hospital/clinic</Link>
              </a>
            </li>
          </ul>

          <ul>
            <h3 className="fh">Link</h3>
            <li>
              <a>
                <Link to="/doctor/login">Doctor Login</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/about">About us</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/privacypolicy">Privacy Policy</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/about">Career</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/refundpolicy">Refund Policy</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/termofuse">Terms Of Use</Link>
              </a>
            </li>
          </ul>
        </div>
        <div className="newsletter">
          <h3>
            Health<span>Mudraa</span>
          </h3>
        </div>
      </div>

      <div className="cs">
        <h3 className="fh">Contact Us</h3>
        <p>
          #2594/1, 3rd Floor, 15th Cross, 27th Main Rd, 1st Sector, HSR Layout,
          Bengaluru, Karnataka 560102
        </p>
      </div>
      <div className="social">
        <a href="https://www.linkedin.com/company/healthmudraa/">
          <FaLinkedin style={{ color: "rgba(19, 54, 130, 1)" }} size={24} />
        </a>
        <a href="https://www.facebook.com/healthmudraa/">
          <FaFacebook style={{ color: "rgba(19, 54, 130, 1)" }} size={24} />
        </a>
        <a href="https://www.instagram.com/healthmudraa/">
          <FaInstagram style={{ color: "rgba(19, 54, 130, 1)" }} size={24} />
        </a>
        <a href="https://x.com/HealthMudraa">
          <FaTwitter style={{ color: "rgba(19, 54, 130, 1)" }} size={24} />
        </a>
        <a href="https://www.youtube.com/@healthmudraa">
          <FaYoutube style={{ color: "rgba(19, 54, 130, 1)" }} size={24} />
        </a>
      </div>
      <div className="info">
        <div className="copyright">&copy; HealthMudraa,All Rights Reserved</div>
      </div>
    </footer>
  );
};

export default TestFooter;
