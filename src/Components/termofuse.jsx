import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TermofUse = () => {
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
          <h2 className="text-center">Terms and Conditions</h2>
        </div>

        <div className="card-body col-12 col-sm-10 mx-auto py-4">
          <h4>1. Introduction</h4>
          <p>
            These Terms and Conditions govern your use of Health Mudraa Pvt
            Ltd's website, products, and services. By accessing or using our
            website and services, you agree to comply with these Terms and
            Conditions and our Privacy Policy. If you do not agree with any part
            of these terms, please refrain from using our website and services.
          </p>
          <h4>2. Definitions</h4>
          <ul>
            <li>
              <strong>You or Your:</strong> Refers to you as the user, whether
              registered or not.
            </li>
            <li>
              <strong>Health Mudraa, us, we, Company, Our:</strong> Refers to
              Health Mudraa Pvt Ltd.
            </li>
          </ul>
          <h4>3. User Consent</h4>
          <p>
            By registering, using our products, or clicking on the 'I accept' or
            'I agree' tab, you consent to the collection, storage, processing,
            disclosure, and transfer of your information as described in our
            Privacy Policy. You affirm that you are 18 years of age or older and
            capable of entering into this legally binding agreement.
          </p>
          <h4>4. Age Requirement</h4>
          <p>
            You must be at least 18 years of age or older to register and use
            our services. By using our website and services, you affirm that you
            meet this age requirement. If you are under 18 years of age, you may
            use our services only with the involvement of a parent or guardian.
          </p>
          <h4>5. User Responsibilities</h4>
          <ul>
            <li>
              You agree to provide accurate, current, and complete information
              during registration and use of our services.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account and password and for restricting access to your account.
            </li>
            <li>
              You agree to notify us immediately of any unauthorized use of your
              account or any other breach of security.
            </li>
          </ul>
          <h4>6. Prohibited Activities</h4>
          <ul>
            <li>
              You agree not to engage in any activity that could harm, disable,
              overburden, or impair our website or services, or interfere with
              any other party's use and enjoyment of them.
            </li>
            <li>
              You agree not to use automated systems or software to extract data
              from our website for commercial purposes without our prior written
              consent.
            </li>
          </ul>
          <h4>7. Intellectual Property</h4>
          <ul>
            <li>
              All content on our website, including text, graphics, logos,
              button icons, images, audio clips, digital downloads, data
              compilations, and software, is the property of Health Mudraa Pvt
              Ltd or its content suppliers and is protected by copyright laws.
            </li>
            <li>
              You may not reproduce, modify, distribute, display, perform, or
              prepare derivative works based upon, or exploit, any part of the
              content without our prior written consent.
            </li>
          </ul>
          <h4>8. Modifications to Services</h4>
          <ul>
            <li>
              We reserve the right to modify or discontinue, temporarily or
              permanently, our website or services (or any part thereof) with or
              without notice.
            </li>
            <li>
              You agree that we shall not be liable to you or any third party
              for any modification, suspension, or discontinuance of our website
              or services.
            </li>
          </ul>
          <h4>9. Updates to Terms and Conditions</h4>
          <ul>
            <li>
              We reserve the right to update, change, or replace any part of
              these Terms and Conditions by posting updates and changes to our
              website. It is your responsibility to check our website
              periodically for changes. Your continued use of our website or
              services following the posting of any changes constitutes
              acceptance of those changes.
            </li>
          </ul>
          <h4>10. Termination</h4>
          <ul>
            <li>
              We may suspend or terminate your access to our website or services
              immediately, without prior notice or liability, for any reason
              whatsoever, including without limitation if you breach these Terms
              and Conditions.
            </li>
            <li>
              Upon termination, your right to use our website and services will
              immediately cease.
            </li>
          </ul>
          <h4>11. Limitation of Liability</h4>
          <p>
            In no event shall Health Mudraa Pvt Ltd, its directors, officers,
            employees, affiliates, agents, contractors, or licensors be liable
            for any indirect, incidental, special, consequential, or punitive
            damages, including without limitation, loss of profits, data, use,
            goodwill, or other intangible losses, arising out of or in
            connection with your use of our website or services.
          </p>
          <h4>12. Governing Law</h4>
          <p>
            These Terms and Conditions shall be governed by and construed in
            accordance with the laws of [Specify Jurisdiction], without regard
            to its conflict of law principles.
          </p>
          <h4>13. Severability</h4>
          <p>
            If any provision of these Terms and Conditions is found to be
            unlawful, void, or unenforceable, that provision shall be deemed
            severable from these Terms and Conditions and shall not affect the
            validity and enforceability of any remaining provisions.
          </p>
          <h4>14. Entire Agreement</h4>
          <p>
            These Terms and Conditions, together with our Privacy Policy,
            constitute the entire agreement between you and Health Mudraa Pvt
            Ltd regarding your use of our website and services, superseding any
            prior agreements between you and us.
          </p>
          <h4>15. Contact Us</h4>
          <p>
            For any questions about these Terms and Conditions, please contact
            us at healthmudraa.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermofUse;
