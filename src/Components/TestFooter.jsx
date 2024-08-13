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
import { IoLocationOutline } from "react-icons/io5";

const TestFooter = () => {
  return (
    <>
      <footer className="hidden sm:block mt-10">
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
                <Link to="/videos">Home</Link>
              </li>
              <li>
                <Link to="/doctors">Find A Doctor</Link>
              </li>
              <li>
                <Link to="/plans">Plans</Link>
              </li>
              <li>
                <Link to="/hospitals">Add your Hospital/clinic</Link>
              </li>
            </ul>

            <ul>
              <h3 className="fh">Link</h3>
              <li>
                <Link to="/doctor/login">Doctor Login</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/privacypolicy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/about">Career</Link>
              </li>
              <li>
                <Link to="/refundpolicy">Refund Policy</Link>
              </li>
              <li>
                <Link to="/termofuse">Terms Of Use</Link>
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
            #2594/1, 3rd Floor, 15th Cross, 27th Main Rd, 1st Sector, HSR
            Layout, Bengaluru, Karnataka 560102
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
          <div className="copyright">
            &copy; HealthMudraa, All Rights Reserved
          </div>
        </div>
      </footer>

      {/*  Mobile footer */}
      <footer className="bg-[#D3E9FD] w-full  sm:hidden block">
        <div className="">
          {/* Heading */}
          <div className="flex justify-center pt-4">
            <span className="text-[#133682] text-2xl font-bold mr-1">
              Health
            </span>
            <span className="ml-1 text-[#FD2621] text-2xl font-bold">
              Mudraa
            </span>
          </div>

          {/* Second Component */}
          <div className="flex mt-3 p-0 justify-between ">
            <div className=" flex flex-col ml-4">
              <h3 className="text-lg font-normal">Important Links</h3>
              <Link
                to="/doctor/login"
                className="no-underline text-[#26262699] font-poppins text-sm"
              >
                Doctor login
              </Link>

              <Link
                to="/plans"
                className="no-underline text-[#26262699] font-poppins text-sm"
              >
                Our plans
              </Link>

              <Link
                to="#"
                className="no-underline text-[#26262699] font-poppins text-sm"
              >
                Our Expert Doctors
              </Link>
            </div>

            <div className="flex flex-col mr-4">
              <h3 className="text-lg font-normal ">Legal</h3>
              <Link
                to="#"
                className="no-underline text-[#26262699] font-poppins text-sm "
              >
                Terms And Condition
              </Link>

              <Link
                to="/privacypolicy"
                className="no-underline text-[#26262699] font-poppins text-sm"
              >
                Privacy Policy
              </Link>

              <Link
                to="/refundpolicy"
                className="no-underline text-[#26262699] font-poppins text-sm"
              >
                Refund Policy
              </Link>
            </div>
          </div>

          {/* Third Component */}
          <div className="sm:hidden block">
            <h3 className="text-lg font-normal text-center pt-4">Contact Us</h3>
            <div className=" flex justify-center items-center">
              <IoLocationOutline className="text-[#133682] w- 4 h-4" />
              <span className=" text-[8px] text-left text-[#242424] font-normal  leading-[1.5]">
                #2594/1, 3rd Floor, 15th Cross, 27th Main Rd, 1st Sector, HSR
                Layout, <br /> Bengaluru, Karnataka 560102
              </span>
            </div>
          </div>

          {/* Icon Part */}
          <div className="flex mt-4 p-0 justify-between mx-4">
            <a href="https://www.linkedin.com/company/healthmudraa/">
              <FaLinkedin style={{ color: "rgba(19, 54, 130, 1)" }} size={10} />
            </a>
            <a href="https://www.facebook.com/healthmudraa/">
              <FaFacebook style={{ color: "rgba(19, 54, 130, 1)" }} size={10} />
            </a>
            <a href="https://www.instagram.com/healthmudraa/">
              <FaInstagram
                style={{ color: "rgba(19, 54, 130, 1)" }}
                size={10}
              />
            </a>
            <a href="https://x.com/HealthMudraa">
              <FaTwitter style={{ color: "rgba(19, 54, 130, 1)" }} size={10} />
            </a>
            <a href="https://www.youtube.com/@healthmudraa">
              <FaYoutube style={{ color: "rgba(19, 54, 130, 1)" }} size={10} />
            </a>
          </div>

          {/* fourth Part */}
          <div className="text-center py-2">
            <span className=" text-[8px]  text-[#242424] font-normal  leading-[1.5] capitalize">
              all rights are with health mudraa
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default TestFooter;
