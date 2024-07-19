import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <div className="">
        <div
          className="card-header text-white d-flex justify-content-center align-items-center"
          style={{
            height: "150px",
            backgroundColor: "#28328c",
          }}
        >
          <h2 className="text-center">Cancellation and Refund Policy</h2>
        </div>

        <div className="card-body card-body col-12 col-sm-10 mx-auto py-4">
          <h4>1. Refund Process</h4>
          <p>
            We initiate refunds within 3-5 business days from the requested
            date, refunding the amount to the original mode of payment used
            during booking. The mode of refund may vary depending on the
            specific circumstances of each case.
          </p>
          <h4>2. Refund Eligibility</h4>
          <p>
            To be eligible for a full refund, customers must submit a
            Refund/Cancellation Request to healthmudraa@gmail.com within 7-14
            days from the original booking date. Requests received within this
            timeframe will be considered for a full refund of the paid amount.
          </p>
          <h4>3. Partial Refunds</h4>
          <p>
            Refund requests made beyond the 7-14 day timeframe may be subject to
            a partial refund. The refund amount will be determined based on the
            specific circumstances of the request, ranging from 0% to 50% of the
            payment amount.
          </p>
          <h4>4. Maximum Refund/Cancellation Period</h4>
          <p>
            The maximum period for submitting a refund or cancellation request
            is 30 days from the original booking date. Requests received after
            this period may not be eligible for any refund.
          </p>
          <h4>5. Non-Refundable Services</h4>
          <p>
            Certain services or products offered by Health Mudraa Pvt Ltd may be
            non-refundable. Any such exceptions will be clearly communicated at
            the time of booking or purchase.
          </p>
          <h4>6. Refund Processing Fee</h4>
          <p>
            In some cases, a processing fee may apply to refund transactions.
            Any applicable fees will be deducted from the refund amount or
            communicated to the customer prior to processing the refund.
          </p>
          <h4>7. Communication of Refund Status</h4>
          <p>
            We will communicate the status of your refund request via email or
            other contact information provided. Please ensure the contact
            details are accurate and up to date to facilitate smooth
            communication.
          </p>
          <h4>8. Refund Disputes</h4>
          <p>
            If you believe that you are entitled to a refund that has not been
            processed or if there is a discrepancy in the refunded amount,
            please contact us immediately at healthmudraa@gmail.com. We will
            investigate the matter promptly and provide assistance accordingly.
          </p>
          <h4>9. Force Majeure</h4>
          <p>
            Health Mudraa Pvt Ltd shall not be liable for any delay or failure
            to perform its obligations under this policy due to circumstances
            beyond its reasonable control, including but not limited to acts of
            God, war, terrorism, strikes, or natural disasters.
          </p>
          <h4>10. Contact Us</h4>
          <p>
            For any questions or concerns regarding our Cancellation and Refund
            Policy, please contact us at healthmudraa@gmail.com. Our team will
            be happy to assist you with any queries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
