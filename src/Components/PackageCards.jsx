import React from "react";
import { Link } from "react-router-dom";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import MembershipBenifits from "./MembershipBenifits";
import "./Pricing2.css"; // Import the CSS file

const PackageCards = () => {
  return (
    <>
      <div
        className="outerplans"
        style={{
          marginTop: "5rem",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            letterSpacing: "2px",
          }}
        >
          Plans
        </p>
        <div className="innerplans my-5" style={{ width: "100%" }}>
          <section className="pricing py-2">
            <div
              className="container"
              style={{
                width: "80%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="row" style={{ "--bs-gutter-x": "1.5rem" }}>
                <div
                  className="col-lg-4"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="card card-custom mb-5 mb-lg-0">
                    <div className="card-body">
                      <h5 className="card-title text-uppercase text-center">
                        Gold One
                      </h5>
                      <h6
                        className="card-price text-center"
                        style={{ marginTop: "1.5rem" }}
                      >
                        <span className="priceclass">699</span>
                        <span className="period">/year</span>
                      </h6>
                      <hr />
                      <ul className="fa-ul">
                        <li>
                          <i className="bi bi-check"></i> Applies to one person
                          only
                        </li>
                        <li>
                          <i className="bi bi-check"></i> Free Consultation
                          worth 699
                        </li>
                        <li>
                          <i className="bi bi-check"></i> Priority Appointment
                          booking
                        </li>
                        <li>
                          <i className="bi bi-check"></i> 24/7 Customer Support
                        </li>
                        <li>
                          <i className="bi bi-check"></i> Hospitalization
                          Support
                        </li>
                      </ul>
                      <Link
                        to="/"
                        className="btn btn-block btn-primary my-3 center-button"
                        style={{ width: "95%", borderRadius: "0.6rem" }}
                      >
                        Buy The Plan
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="card card-custom mb-5 mb-lg-0">
                    <div className="card-body">
                      <h5 className="card-title text-uppercase text-center">
                        Gold Family
                      </h5>
                      <h6
                        className="card-price text-center"
                        style={{ marginTop: "1.5rem" }}
                      >
                        <span className="priceclass">2499</span>
                        <span className="period">4+2 Persons/Year</span>
                      </h6>
                      <hr />
                      <ul className="fa-ul">
                        <li>
                          <i className="bi bi-check"></i> 4+2 - 4 Adults & 2
                          Children
                        </li>
                        <li>
                          <i className="bi bi-check"></i> Free Consultation
                          Voucher
                        </li>
                        <li>
                          <i className="bi bi-check"></i> Priority Appointment
                          Booking
                        </li>
                        <li>
                          <i className="bi bi-check"></i> 24/7 Customer Support
                        </li>
                        <li>
                          <i className="bi bi-check"></i> Hospitalization
                          Support
                        </li>
                      </ul>
                      <Link
                        to="/"
                        className="btn btn-block btn-primary my-3 center-button"
                        style={{ width: "95%", borderRadius: "0.6rem" }}
                      >
                        Buy The Plan
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="card card-custom mb-5 mb-lg-0">
                    <div className="card-body">
                      <h5 className="card-title text-uppercase text-center">
                        Gold Grand Family
                      </h5>
                      <h6
                        className="card-price text-center"
                        style={{ marginTop: "1.5rem" }}
                      >
                        <span className="priceclass">2999</span>
                        <span className="period">4+4 Persons/Year</span>
                      </h6>
                      <hr />
                      <ul className="fa-ul">
                        <li>
                          <i className="bi bi-check"></i> 4+4 - 4 Adults & 4
                          Children
                        </li>
                        <li>
                          <i className="bi bi-check"></i> Free Consultation
                          Voucher
                        </li>
                        <li>
                          <i className="bi bi-check"></i> Priority Appointment
                          booking
                        </li>
                        <li>
                          <i className="bi bi-check"></i> 24/7 Customer Support
                        </li>
                        <li>
                          <i className="bi bi-check"></i> Hospitalization
                          Support
                        </li>
                      </ul>
                      <Link
                        to="/"
                        className="btn btn-block btn-primary my-3 center-button"
                        style={{ width: "95%", borderRadius: "0.6rem" }}
                      >
                        Buy The Plan
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <MembershipBenifits />
      <FrequentlyAskedQuestions />
    </>
  );
};

export default PackageCards;
