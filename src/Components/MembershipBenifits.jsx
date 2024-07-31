import React from "react";
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faUserMd, faFileMedical, faProcedures, faStethoscope } from '@fortawesome/free-solid-svg-icons'; */
import aiImage from "./Svgs/ai.png";
import taImage from "./Svgs/ta.png";
import phImage from "./Svgs/ph.png";
import mrImage from "./Svgs/mr.png"
import saImage from './Svgs/sa.png'
import "./MembershipBenefits.css";

const MembershipBenefits = () => {
  return (
    <>
      <div className="membership-header">
        <p className="membership-title">Membership Benifits</p>
      </div>

      <div className="membership">
        <div className="mb-cards">
          <div className="first-3">
            <div className="bx1">
              <div className="icon">
                <img className="mb-img" src={aiImage} alt="" />
              </div>
              <div  className="bx-content">
                <h1>AI Features</h1>
                <p>
                  Blood Test Upload:{" "}
                  <span>
                    AI generates an understandable chart with explanations.
                  </span>
                </p>
                <p>
                  ECG Upload:{" "}
                  <span>AI predicts outcomes and more advanced features.</span>
                </p>
              </div>
            </div>
            <div className="bx2">
              <div className="icon">
                <img className="mb-img" src={phImage} alt="" />
              </div>
              <div className="bx-content">
                <h1>Personal Health Profile</h1>
                <p>AI-generated vital chart monitoring:</p>
                <ul>
                  <li>Blood sugar level</li>
                  <li>Heart rate</li>
                  <li>Blood pressure</li>
                  <li>Temperature</li>
                  <li>Cholesterol</li>
                </ul>
              </div>
            </div>
            <div className="bx3">
              <div className="icon">
                <img className="mb-img" src={mrImage} alt="" />
              </div>
              <div className="bx-content">
                <h1>Medical Records</h1>
                <p>Upload and store your medical reports:</p>
                <ul>
                  <li>Prescriptions</li>
                  <li>Discharge summaries</li>
                  <li>Tablets list</li>
                  <li>Exercise list</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="second-2">
          <div className="bx4">
              <div className="icon">
                <img  className="mb-img" src={taImage} alt="" />
              </div>
              <div className="bx-content">
                <h1>Treatment Assistance</h1>
                <ul>
                  <li>
                    Assistance with listed doctors in Health Mudraa for
                    appointment booking.
                  </li>
                  <li>Dedicated assistant in hospital during admissions.</li>
                  <li>Language assistance.</li>
                </ul>
              </div>
            </div>
            <div className="bx5">
              <div className="icon">
                <img className="mb-img" src={saImage} alt="" />
              </div>
              <div className="bx-content">
                <h1>Surgery Assistance</h1>
                <p>Save up to 50% on your surgery expenses</p>
                <ul>
                  <li>Surgery preference</li>
                  <li>Bed booking</li>
                  <li>Insurance claims support</li>
                  <li>No-cost EMI support</li>
                  <li>Travel plans (if different state/international)</li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default MembershipBenefits;
