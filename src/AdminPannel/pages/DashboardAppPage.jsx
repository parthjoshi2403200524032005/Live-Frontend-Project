import React from "react";
import ai from "../../Components/Svgs/ai_img.png";
import profile from "../../Components/Svgs/personal_health_Profile.png";
import surgery from "../../Components/Svgs/medical_report.png";
import medical_record from "../../Components/Svgs/surgery.png";
import blood_test from "../../Components/Svgs/blood_test.png";
import heart from "../../Components/Svgs/heart.png";
import bottle from "../../Components/Svgs/bottle.png";
import kidney from "../../Components/Svgs/kidney.png";
import kidney_mobile from "../../Components/Svgs/kidney_mobile.png";
import php1 from "../../Components/Svgs/php1.png";
import php2 from "../../Components/Svgs/php2.png";
import php3 from "../../Components/Svgs/php3.png";
import php4 from "../../Components/Svgs/php4.png";
import php5 from "../../Components/Svgs/php5.png";
import php6 from "../../Components/Svgs/php6.png";
import php7 from "../../Components/Svgs/php7.png";
import STA1 from "../../Components/Svgs/STA1.png";
import STA2 from "../../Components/Svgs/STA2.png";
import STA3 from "../../Components/Svgs/STA3.png";
import STA4 from "../../Components/Svgs/STA4.png";
import STA5 from "../../Components/Svgs/STA5.png";
import STA6 from "../../Components/Svgs/STA6.png";
import STA7 from "../../Components/Svgs/STA7.png";
import MR1 from "../../Components/Svgs/MR1.png";
import MR2 from "../../Components/Svgs/MR2.png";
import MR3 from "../../Components/Svgs/MR3.png";
import MR4 from "../../Components/Svgs/MR4.png";
import "../../Components/TestFooter.css";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import NewNavbar from "../../Components/NavBar/New_Navbar";
import Dashboard from "./Dashboard";

const DashboardAppPage = () => {
  return (
    <>
      <NewNavbar />
      <main className="sm:space-y-24 space-y-20 mt-24">
        {/* Smart Section */}
        <div className="max-w-7xl mx-auto bg-[#F0F3FF] py-12 rounded-[10px]">
          <div className="flex flex-col items-center">
            <div className="text-3xl sm:text-4xl font-bold sm:tracking-wide tracking-normal  max-w-[85%] leading-[42px] mx-auto text-center">
              <p className="md:text-4xl md:leading-5 md:font-bold">
                Our Smart Health Solution
              </p>
            </div>
            <div className="border-t-[6px] w-[70px] sm:w-[100px] mx-auto border-[#133682] rounded-[10px]" />
          </div>
          <div className="grid sm:grid-cols-4 grid-cols-2 mt-12">
            <div className="mx-auto text-center">
              <img
                src={ai}
                alt=""
                className="mx-auto  sm:bg-[#F0F3FF] bg-[#fff] p-3 sm:p-0 sm:rounded-none rounded-[15px]"
              />
              <p className="font-dm-sans mt-2 sm:mt-0">Ai Features</p>
            </div>
            <div className="mx-auto text-center">
              <img
                src={profile}
                alt=""
                className="mx-auto  sm:bg-[#F0F3FF] bg-[#fff]  p-3 sm:p-0 sm:rounded-none rounded-[15px]"
              />
              <p className="font-dm-sans mt-2 sm:mt-0">
                Perosnal Health <br /> Profile
              </p>
            </div>
            <div className="mx-auto text-center">
              <img
                src={surgery}
                alt=""
                className=" mx-auto sm:bg-[#F0F3FF] bg-[#fff]  p-3 sm:p-0 sm:rounded-none rounded-[15px]"
              />
              <p className="font-dm-sans mt-2 sm:mt-0">
                Surgery & Treatment <br /> Assistance
              </p>
            </div>
            <div className="mx-auto text-center">
              <img
                src={medical_record}
                alt=""
                className="mx-auto  sm:bg-[#F0F3FF] bg-[#fff]  p-3 sm:p-0 sm:rounded-none rounded-[15px]"
              />
              <p className="font-dm-sans mt-2 sm:mt-0">
                Medical <br /> Records
              </p>
            </div>
          </div>
        </div>

        {/* AI Anaiysis Reports */}
        <div className="hidden sm:block max-w-7xl mx-auto bg-[#F0F3FF] py-12 rounded-[10px]">
          <div className=" px-11 flex flex-col gap-4 font-normal">
            <h1 className="text-4xl leading-5 font-bold">
              AI Analysis Reports
            </h1>
            <p className="tracking-wider font-medium">
              AI Lab Reports Analysis uses AI to simplify test results with
              clear explanations and personalized health insights.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 mx-10 my-3">
            <div className="flex flex-col bg-white gap-7 mx-auto rounded-lg rounded-custom bg-custom shadow-custom">
              <img src={blood_test} alt="" className="h-24 w-24 mx-auto mt-3" />
              <h1 className="text-xl font-bold text-center">Blood Tests</h1>
              <p className="text-[#454545] px-4">
                Upload your blood test reports for easy-to-read charts and
                personalized health insights with AI analysis.
              </p>
            </div>

            <div className="flex flex-col bg-white gap-7 mx-auto rounded-lg rounded-custom bg-custom shadow-custom">
              <img src={heart} alt="" className="h-24 w-24 mx-auto mt-3" />
              <h1 className="text-xl font-bold text-center">ECG Report</h1>
              <p className="text-[#454545] px-4">
                Upload your ECG reports to get clear, AI-generated explanations
                and precise heart health assessments.
              </p>
            </div>

            <div className="flex flex-col bg-white gap-7 mx-auto rounded-lg rounded-custom bg-custom shadow-custom">
              <img src={bottle} alt="" className="h-24 w-24 mx-auto mt-3" />
              <h1 className="text-xl font-bold text-center">Urine Test</h1>
              <p className="text-[#454545] px-4">
                Our AI delivers detailed insights and personalized health advice
                from your urine test results.
              </p>
            </div>

            <div className="flex flex-col bg-white gap-7 mx-auto rounded-lg rounded-custom bg-custom shadow-custom">
              <img src={kidney} alt="" className="h-24 w-24 mx-auto mt-3" />
              <h1 className="text-xl font-bold text-center">
                Metabolic Report
              </h1>
              <p className="text-[#454545] px-4">
                Upload your metabolic reports for AI analysis, personalized
                charts, and actionable insights.
              </p>
            </div>
          </div>
        </div>

        {/*Mobile AI Anaiysis Reports */}
        <div className="w-full sm:hidden block">
          <div className="space-y-5 ">
            <h1 className="text-3xl font-bold tracking-wide text-center">
              AI Analysis Reports
            </h1>
            <p className="text-[#454545] text-xs  tracking-wider mx-3">
              AI Lab Reports Analysis uses AI to simplify test results with
              clear explanations and personalized health insights.
            </p>
          </div>
          <div className="mt-3 flex mx-3 bg-[#F0F3FF] py-3 px-3 pb-0 mobile-rounded-custom mobile-border-custom space-y-5">
            <div className="w-[70%]">
              <p className="text-black font-semibold text-base pt-1">
                Blood Tests
              </p>
              <p className="font-normal text-[#454545] text-sm">
                Upload your blood test reports for easy-to-read charts and
                personalized health insights with AI analysis.
              </p>
            </div>
            <div className="w-[30%] flex items-center mt-0">
              <img
                src={blood_test}
                alt=""
                className=" flex-1 mx-auto object-cover"
              />
            </div>
          </div>

          <div className="mt-3 flex mx-3 bg-[#F0F3FF] py-3 px-3 pb-0 mobile-rounded-custom mobile-border-custom space-y-5">
            <div className="w-[70%]">
              <p className="text-black font-semibold text-base pt-1">
                ECG Report
              </p>
              <p className="font-normal text-[#454545] text-sm">
                Upload your ECG reports to get clear, AI-generated explanations
                and precise heart health assessments.
              </p>
            </div>
            <div className="w-[30%] flex items-center mt-0">
              <img
                src={heart}
                alt=""
                className=" flex-1 mx-auto object-cover"
              />
            </div>
          </div>

          <div className="mt-3 flex mx-3 bg-[#F0F3FF] py-3 px-3 pb-0 mobile-rounded-custom mobile-border-custom space-y-5">
            <div className="w-[70%]">
              <p className="text-black font-semibold text-base pt-1">
                Urine Test
              </p>
              <p className="font-normal text-[#454545] text-sm">
                Our AI delivers detailed insights and personalized health advice
                from your urine test results.
              </p>
            </div>
            <div className="w-[30%] flex items-center mt-0">
              <img
                src={bottle}
                alt=""
                className=" flex-1 mx-auto object-cover"
              />
            </div>
          </div>

          <div className="mt-3 flex mx-3 bg-[#F0F3FF] py-3 px-3 pb-0 mobile-rounded-custom mobile-border-custom space-y-5">
            <div className="w-[70%]">
              <p className="text-black font-semibold text-base pt-1">
                Metabolic Report
              </p>
              <p className="font-normal text-[#454545] text-sm">
                Upload your metabolic reports for AI analysis, personalized
                charts, and actionable insights.
              </p>
            </div>
            <div className="w-[30%] flex items-center mt-0">
              <img
                src={kidney_mobile}
                alt=""
                className=" flex-1 mx-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Personal Health Profile */}
        <div className=" max-w-7xl mx-auto  rounded-[10px]">
          <div className="sm:px-11 px-4 flex flex-col gap-2 font-normal">
            <h1 className="sm:text-4xl sm:leading-5 sm:font-bold text-center font-poppins text-3xl font-semibold  tracking-[0.8px] sm:tracking-normal">
              Personal Health Profile
            </h1>
            <p className="sm:tracking-wider sm:font-medium text-center text-[#454545]  font-helvetica  text-sm font-medium leading-normal tracking-[0.6px]">
              AI-generated vital chart monitoring delivers thorough and
              continuous health insights, facilitating <br /> proactive health
              management.
            </p>
          </div>

          <div className="grid sm:bg-gradient-to-b sm:from-[#fff] sm:via-[#fff] sm:to-[#fff] bg-gradient-to-b from-[#fff] via-[#F0F3FF] to-[#fff] xl:grid-cols-7 md:grid-cols-4 sm:grid-cols-3 md:space-y-3 grid-cols-2 space-y-10 ">
            <div className="PHP-rounded-custom PHP-bg-custom PHP-shadow-custom flex flex-col justify-center items-center mx-auto  w-36 h-40 sm:mt-12 md:mt-3 lg:mt-3 xl:mt-3 mt-10  ">
              <img
                src={php1}
                alt=""
                className="sm:w-20 sm:h-20 w-24 h-24  mb-2 bg-[#F0F3FF] "
              />
              <p className="font-medium text-md text-[#454545] text-center mb-0">
                Temperature
              </p>
            </div>

            <div className="PHP-rounded-custom PHP-bg-custom PHP-shadow-custom flex flex-col justify-center items-center mx-auto  w-36 h-40">
              <img
                src={php2}
                alt=""
                className="sm:w-20 sm:h-20 w-24 h-24 mb-2 bg-[#F0F3FF]"
              />
              <p className="font-medium text-md text-[#454545] text-center mb-0 px-2">
                Blood Pressure
              </p>
            </div>

            <div className="PHP-rounded-custom PHP-bg-custom PHP-shadow-custom flex flex-col justify-center items-center mx-auto w-36 h-40">
              <img
                src={php3}
                alt=""
                className="sm:w-20 sm:h-20 w-24 h-24 mb-2 "
              />
              <p className="font-medium text-md text-[#454545] text-center mb-0">
                Heart Rate
              </p>
            </div>

            <div className="PHP-rounded-custom PHP-bg-custom PHP-shadow-custom flex flex-col justify-center items-center mx-auto  w-36 h-40">
              <img
                src={php4}
                alt=""
                className="sm:w-20 sm:h-20 w-24 h-24 mb-2 bg-none"
              />
              <p className="font-medium text-md text-[#454545] text-center mb-0">
                Liver Function
              </p>
            </div>

            <div className="PHP-rounded-custom PHP-bg-custom PHP-shadow-custom flex flex-col justify-center items-center mx-auto  w-36 h-40 ">
              <img
                src={php5}
                alt=""
                className="sm:w-20 sm:h-20 w-24 h-24 lg:mt-4 mb-2 "
              />
              <p className="font-medium text-md text-[#454545] text-center mb-0">
                Thyroid <br /> Function
              </p>
            </div>

            <div className="PHP-rounded-custom PHP-bg-custom PHP-shadow-custom flex flex-col justify-center items-center mx-auto  w-36 h-40">
              <img
                src={php6}
                alt=""
                className="sm:w-20 sm:h-20 w-24 h-24 mb-2"
              />
              <p className="font-medium text-md text-[#454545] text-center mb-0">
                Genetic Profile
              </p>
            </div>

            <div className="hidden md:flex PHP-rounded-custom PHP-bg-custom PHP-shadow-custom  flex-col justify-center items-center mx-auto  w-36 h-40">
              <img
                src={php7}
                alt=""
                className="sm:w-20 sm:h-20 w-24 h-24 mb-2"
              />
              <p className="font-medium text-md text-[#454545] text-center mb-0">
                Cholesterol
              </p>
            </div>
          </div>
        </div>

        {/* Surgery and tertment Assistance */}
        <div className=" max-w-7xl mx-auto  rounded-[10px]">
          <div className="sm:px-11 px-4 flex flex-col gap-3 font-normal">
            <h1 className="hidden sm:block sm:text-4xl sm:leading-5 sm:font-bold text-center  text-xl font-semibold  tracking-[1.2px] sm:tracking-normal">
              Surgery & Treatment Assistance
            </h1>
            <h1 className="sm:hidden block    sm:text-4xl sm:leading-5 sm:font-bold text-center  text-3xl font-semibold  tracking-[1.2px] sm:tracking-normal">
              Surgery & Treatment <br /> Assistance
            </h1>
            <p className="hidden sm:block sm:tracking-wider sm:font-medium text-center text-[#454545]  font-helvetica  text-sm font-medium leading-normal tracking-[0.6px]">
              Save significantly on surgical procedures and reduce financial
              burdens. Book appointments with Health Mudraa doctors <br /> & get
              dedicated hospital admission support with language assistance.{" "}
            </p>

            <p className=" sm:hidden block sm:tracking-wider sm:font-medium text-center text-[#454545]  font-helvetica  text-sm font-medium leading-normal tracking-[0.6px]">
              Save significantly on surgical procedures and reduce financial
              burdens. Book appointments with Health Mudraa doctors & get
              dedicated hospital admission support with language assistance.{" "}
            </p>
          </div>

          <div className="grid sm:bg-gradient-to-b sm:from-[#fff] sm:via-[#fff] sm:to-[#fff] bg-gradient-to-b from-[#fff] via-[#F0F3FF] to-[#fff] xl:grid-cols-7 md:grid-cols-4 sm:grid-cols-3 md:space-y-3 grid-cols-2 space-y-10 ">
            <div className="PHP-rounded-custom PHP-bg-custom PHP-shadow-custom flex flex-col justify-center items-center mx-auto   w-36 h-40 sm:mt-12 md:mt-3 lg:mt-3 xl:mt-3 mt-10  ">
              <img
                src={STA1}
                alt=""
                className="sm:w-20 sm:h-20 w-24 h-24 mb-2"
              />
              <p className="font-medium text-md text-[#454545] text-center mb-0">
                Surgery <br /> preference{" "}
              </p>
            </div>

            <div className="PHP-rounded-custom PHP-bg-custom PHP-shadow-custom flex flex-col justify-center items-center mx-auto   w-36 h-40">
              <img
                src={STA2}
                alt=""
                className="sm:w-20 sm:h-20 w-24 h-24 mb-2"
              />
              <p className="font-medium text-md text-[#454545] text-center mb-0">
                Insurance <br />
                claim
              </p>
            </div>

            <div className="PHP-rounded-custom PHP-bg-custom PHP-shadow-custom flex flex-col justify-center items-center mx-auto  w-36 h-40">
              <img
                src={STA3}
                alt=""
                className="sm:w-20 sm:h-20 w-24 h-24 mb-2"
              />
              <p className="font-medium text-md text-[#454545] text-center mb-0">
                Travel plans{" "}
              </p>
            </div>

            <div className="PHP-rounded-custom PHP-bg-custom PHP-shadow-custom flex flex-col justify-center items-center mx-auto   w-36 h-40">
              <img
                src={STA4}
                alt=""
                className="sm:w-20 sm:h-20 w-24 h-24 mb-2"
              />
              <p className="font-medium text-md text-[#8e2b2b] text-center mb-0">
                Bed booking{" "}
              </p>
            </div>

            <div className="PHP-rounded-custom PHP-bg-custom PHP-shadow-custom flex flex-col justify-center items-center mx-auto   w-36 h-40 ">
              <img
                src={STA5}
                alt=""
                className="sm:w-20 sm:h-20 w-24 h-24 lg:mt-4 mb-2"
              />
              <p className="font-medium text-md text-[#454545] text-center mb-0">
                No-cost EMI <br /> support
              </p>
            </div>

            <div className="PHP-rounded-custom PHP-bg-custom PHP-shadow-custom flex flex-col justify-center items-center mx-auto   w-36 h-40">
              <img
                src={STA6}
                alt=""
                className="sm:w-20 sm:h-20 w-24 h-24 mb-2"
              />
              <p className="font-medium text-md text-[#454545] text-center mb-0">
                Appointment <br /> Scheduling
              </p>
            </div>

            <div className="hidden md:flex PHP-rounded-custom PHP-bg-custom PHP-shadow-custom  flex-col justify-center items-center mx-auto   w-36 h-40">
              <img
                src={STA7}
                alt=""
                className="sm:w-20 sm:h-20 w-24 h-24 mb-2"
              />
              <p className="font-medium text-md text-[#454545] text-center mb-0">
                Admission <br /> Coordinator
              </p>
            </div>
          </div>
        </div>

        {/* Medical Report */}
        <div className="hidden sm:block max-w-7xl mx-auto bg-[#F0F3FF] py-12 rounded-[10px]">
          <div className=" px-11 flex flex-col gap-4 font-normal">
            <h1 className="text-4xl leading-5 font-bold">Medical Records</h1>
            <p className="tracking-wider font-medium">
              Efficiently manage and access all your medical records in one
              secure location.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 mx-10 my-3">
            <div className="flex flex-col bg-white gap-4 mx-auto rounded-lg rounded-custom bg-custom shadow-custom">
              <img src={MR1} alt="" className="h-24 w-24 mx-auto mt-3" />
              <h1 className="text-xl font-bold text-center">Prescriptions</h1>
              <p className="text-[#454545] px-4 ">
                Store and retrieve your prescriptions easily in one secure
                location for convenient reference and management.
              </p>
            </div>

            <div className="flex flex-col bg-white gap-4 mx-auto rounded-lg rounded-custom bg-custom shadow-custom">
              <img src={MR2} alt="" className="h-24 w-24 mx-auto mt-3" />
              <h1 className="text-xl font-bold text-center">Tablet List</h1>
              <p className="text-[#454545] px-4">
                Keep track of your tablet list securely, ensuring you never miss
                a dose with easy access.
              </p>
            </div>

            <div className="flex flex-col bg-white gap-4 mx-auto rounded-lg rounded-custom bg-custom shadow-custom">
              <img src={MR3} alt="" className="h-24 w-24 mx-auto mt-3" />
              <h1 className="text-xl font-bold text-center">
                Discharge Summaries
              </h1>
              <p className="text-[#454545] px-4">
                Organize your discharge summaries in one secure place, making it
                easy to review and manage your medical history.
              </p>
            </div>

            <div className="flex flex-col bg-white gap-4 mx-auto rounded-lg rounded-custom bg-custom shadow-custom">
              <img src={MR4} alt="" className="h-24 w-24 mx-auto mt-3" />
              <h1 className="text-xl font-bold text-center">Exercise List</h1>
              <p className="text-[#454545] px-4">
                Maintain and access your exercise list securely, helping you
                stay on track with your fitness goals.
              </p>
            </div>
          </div>
        </div>

        {/*Mobile Medical Report */}
        <div className="w-full sm:hidden block bg-[#F0F3FF] pt-4 pb-4">
          <div className="space-y-5 ">
            <h1 className="text-3xl font-bold tracking-wide text-center">
              Medical Records
            </h1>
            <p className="text-[#454545] text-xs  tracking-wider mx-3">
              Efficiently manage and access all your medical records in one
              secure location.
            </p>
          </div>

          <div className="mt-3 flex mx-3 bg-[#FFFFFF] py-3 px-3 pb-0 mobile-rounded-custom mobile-border-custom space-y-5">
            <div className="w-[70%]">
              <p className="text-black font-semibold text-base pt-1">
                Prescriptions
              </p>
              <p className="font-normal text-[#454545] text-sm">
                Store and retrieve your prescriptions easily in one secure
                location for convenient reference and management.
              </p>
            </div>
            <div className="w-[30%] flex items-center mt-0">
              <img src={MR1} alt="" className=" flex-1 mx-auto object-cover" />
            </div>
          </div>

          <div className="mt-3 flex mx-3 bg-[#FFFFFF] py-3 px-3 pb-0 mobile-rounded-custom mobile-border-custom space-y-5">
            <div className="w-[70%]">
              <p className="text-black font-semibold text-base pt-1">
                Tablet List
              </p>
              <p className="font-normal text-[#454545] text-sm">
                Keep track of your tablet list securely, ensuring you never miss
                a dose with easy access.
              </p>
            </div>
            <div className="w-[30%] flex items-center mt-0">
              <img src={MR2} alt="" className=" flex-1 mx-auto object-cover" />
            </div>
          </div>

          <div className="mt-3 flex mx-3 bg-[#FFFFFF] py-3 px-3 pb-0 mobile-rounded-custom mobile-border-custom space-y-5">
            <div className="w-[70%]">
              <p className="text-black font-semibold text-base pt-1">
                Discharge Summaries
              </p>
              <p className="font-normal text-[#454545] text-sm">
                Organize your discharge summaries in one secure place, making it
                easy to review and manage your medical history.
              </p>
            </div>
            <div className="w-[30%] flex items-center mt-0">
              <img src={MR3} alt="" className=" flex-1 mx-auto object-cover" />
            </div>
          </div>

          <div className="mt-3 flex mx-3 bg-[#FFFFFF] py-3 px-3  mobile-rounded-custom mobile-border-custom">
            <div className="w-[70%]">
              <p className="text-black font-semibold text-base pt-1">
                Exercise List
              </p>
              <p className="font-normal text-[#454545] text-sm">
                Maintain and access your exercise list securely, helping you
                stay on track with your fitness goals.
              </p>
            </div>
            <div className="w-[30%] flex items-center mt-0">
              <img src={MR4} alt="" className=" flex-1 mx-auto object-cover" />
            </div>
          </div>
        </div>
      </main>

      {/* laptop Size Footer */}
      <footer className="hidden sm:block mt-5">
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
            &copy; HealthMudraa,All Rights Reserved
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
              <a>
                <Link
                  to="/doctor/login"
                  className="no-underline text-[#26262699] font-poppins text-sm"
                >
                  Doctor login
                </Link>
              </a>

              <a>
                <Link
                  to="/plans"
                  className="no-underline text-[#26262699] font-poppins text-sm"
                >
                  Our plans
                </Link>
              </a>

              <a>
                <Link
                  to="#"
                  className="no-underline text-[#26262699] font-poppins text-sm"
                >
                  Our Expert Doctors
                </Link>
              </a>
            </div>

            <div className="flex flex-col mr-4">
              <h3 className="text-lg font-normal ">Legal</h3>
              <a>
                <Link
                  to="#"
                  className="no-underline text-[#26262699] font-poppins text-sm "
                >
                  Terms And Condition
                </Link>
              </a>

              <a>
                <Link
                  to="/privacypolicy"
                  className="no-underline text-[#26262699] font-poppins text-sm"
                >
                  Privacy Policy
                </Link>
              </a>

              <a>
                <Link
                  to="/refundpolicy"
                  className="no-underline text-[#26262699] font-poppins text-sm"
                >
                  Refund Policy
                </Link>
              </a>
            </div>
          </div>

          {/* Third Component */}
          <div className="sm:hidden block">
            <h3 className="text-lg font-normal text-center pt-4">Contact Us</h3>
            <div className=" flex justify-center items-center">
              <IoLocationOutline className="text-[#133682] w- 4 h-4 mr-1" />
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

export default DashboardAppPage;
