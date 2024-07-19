import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PrivacyPolicy = () => {
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
          <h2 className="text-center">Privacy Policy</h2>
        </div>

        <div className="card-body card-body col-12 col-sm-10 mx-auto py-4">
          <h4>1. Introduction</h4>
          <p>
            Health Mudraa Pvt Ltd is dedicated to safeguarding your privacy and
            ensuring a positive experience with our products and services. In
            this policy, terms such as "You" or "Your" refer to both registered
            and non-registered users. References to "Health Mudraa," "us," "we,"
            "Company," and "Our" pertain to Health Mudraa Pvt Ltd.
          </p>

          <p>
            We encourage you to review this policy regularly to understand how
            Health Mudraa handles your privacy. All personal information
            provided is securely managed using industry-standard protocols and
            technology. We do not sell or rent your personal information for
            monetization or marketing purposes to any third parties.
          </p>

          <h4>2. Collection of Personal Information</h4>
          <p>
            You may be required to provide Health Mudraa with information such
            as your name, mobile number, email, and address during registration
            or payment to complete transactions and enhance our service
            delivery. Health Mudraa does not automatically collect sensitive
            personal data from casual website visitors. We do not store password
            information. Financial details like bank accounts or credit card
            information are collected solely for billing purposes and are
            securely handled during payment processes.
          </p>

          <h4>3. Collection of Other Information</h4>
          <p>
            When you visit our products, we automatically receive information
            such as your Internet Protocol (IP) address to analyze overall
            trends and improve our services. This data is used in aggregate form
            and is not linked to personally identifiable information unless
            required by law. Cookies and web log files are used to enhance
            service quality by storing user preferences and tracking trends. We
            do not store personally identifiable information in cookies.
          </p>

          <h4>4. Third-Party Links</h4>
          <p>
            Our privacy policy applies exclusively to Health Mudraa products and
            services. We do not control the content or privacy practices of
            websites linked from our services. These external sites may place
            their own cookies or collect personal information, for which Health
            Mudraa is not responsible. We recommend reviewing the privacy
            policies of these websites.
          </p>

          <h4>5. Uses of Collected Information</h4>
          <p>
            All personal information provided to Health Mudraa is protected by
            industry-standard security measures. This information is used to
            resolve issues, support needs, or address suspected violations of
            our Terms of Use. Your identifiable/non-identifiable information
            remains the exclusive property of Health Mudraa and may be utilized
            at our discretion. If accidentally deleted, our team may access
            stored databases with your permission for recovery. Upon account
            closure, all identifiable and non-identifiable data is removed from
            public view, except as necessary for fraud prevention or as required
            by law.
          </p>

          <p>
            We use collected data to develop new services, maintain, protect,
            and enhance our offerings, including personalized content and
            advertising, auditing, research, and analysis.
          </p>

          <h4>6. Security of Information</h4>
          <p>
            We implement rigorous security measures to prevent unauthorized
            access, alteration, disclosure, or destruction of data. These
            measures include internal reviews of data collection, storage,
            processing practices, and physical security to safeguard personal
            data. Access to personal information is restricted to employees,
            contractors, and agents who require access for operational,
            developmental, or improvement purposes. These individuals are bound
            by confidentiality agreements and may face disciplinary action,
            including termination and legal prosecution, for breaching these
            obligations.
          </p>

          <h4>7. Sharing Information with Third Parties</h4>
          <p>
            To deliver our products and services, we may share personal
            information with third-party contractors acting on behalf of Health
            Mudraa. These contractors are authorized to use and disclose
            personal information solely for providing these services, pursuant
            to their own privacy policies.
          </p>

          <h4>8. Disclosure of Information</h4>
          <p>
            Health Mudraa may disclose personal information as required by law,
            such as in response to legal proceedings or law enforcement
            requests. We disclose information to comply with court orders,
            ongoing judicial proceedings, or other legal obligations, or to
            protect our legal rights or defend against legal claims.
          </p>

          <h4>9. Children's and Minors' Privacy</h4>
          <p>
            While Health Mudraa products and services are not intended for
            minors, we urge parents and guardians to supervise minors' online
            activities. Parental control tools are recommended to prevent minors
            from disclosing personal information without permission. We respect
            the privacy of minors inadvertently using our services.
          </p>

          <h4>10. Consent</h4>
          <p>
            By using Health Mudraa services, you consent to the collection,
            storage, processing, disclosure, and transfer of your information in
            accordance with this Privacy Policy. Providing personal information
            is voluntary, and you agree to these terms by clicking "I accept" or
            "I agree" during registration or service use. Failure to agree may
            restrict access to our website or services. Contact us at
            healthmudraa.com with any questions regarding this policy.
          </p>

          <h4>11. Changes in the Privacy Policy</h4>
          <p>
            Health Mudraa reserves the right to modify or terminate any part of
            this policy without prior notice. Updates are communicated through
            website messages, notifications, or directly to registered email
            addresses. We encourage regular review of this policy to stay
            informed of any changes.
          </p>

          <h4>12. Medical Information Disclaimer</h4>
          <p>
            Health Mudraa does not assume responsibility for videos created by
            doctors or medical negligence. Our goal is to provide guidance and
            superior medical information compared to other companies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
