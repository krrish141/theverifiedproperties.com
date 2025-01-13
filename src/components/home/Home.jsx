import React, { useState, useEffect } from "react";
import Hero from "./hero/Hero";
import Feature from "./feature/Feature";
import Services from "./services/Services";
import New from "./new/New";
import Partner from "./partner/Partner";
import Testimonials from "./testimonial/Testimonials";
import Counter from "./counter/Counter";
import Search from "../search/Search";

const Home = () => {
  const [showMessageBox, setShowMessageBox] = useState(true);
  const [showMoreText, setShowMoreText] = useState(false); // State for "Read More" functionality
  const [isChecked, setIsChecked] = useState(false); // State to track checkbox

  useEffect(() => {
    // Check if the guidelines have been shown today
    const lastSeenDate = localStorage.getItem("guidelinesSeenDate");
    const todayDate = new Date().toLocaleDateString();

    if (lastSeenDate === todayDate) {
      setShowMessageBox(false); // Don't show the message if already seen today
    } else {
      localStorage.setItem("guidelinesSeenDate", todayDate); // Save today's date in localStorage
    }
  }, []);

  const handleAccept = () => {
    setShowMessageBox(false); // Hide the message box when "Accept" is clicked
  };

  const handleReadMore = () => {
    setShowMoreText(true); // Show the additional text when "Read More" is clicked
  };

  const handleCheckboxChange = () => {
    setIsChecked((prevState) => !prevState); // Toggle the checkbox state
  };

  return (
    <>
      {/* Message Box */}
      {showMessageBox && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgb(0 0 0 / 89%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "1000",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              marginTop: "100px",
              borderRadius: "10px",
              textAlign: "left",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              width: "80%",
              maxHeight: "80%",
              overflowY: "auto",
            }}
          >
            <h2>Guidelines for Website Users to Prevent Illegal Activities</h2>
            <p>
              These detailed guidelines are tailored for property buyers, agents, and property owners to ensure a safe and transparent experience on our platform.
            </p>
            <h4 style={{ marginTop: "15px", marginBottom: "15px", fontWeight: "600", fontSize: "22px" }}>
              Guidelines for Property Buyers
            </h4>
            <ul>
              <li>
                <b>Verify Listings and Agents:</b> Only interact with verified agents or property owners listed on the website. Cross-check property details and request essential legal documents such as title deeds and permits.
              </li>
              <li>
                <b>Beware of Fraudulent Activities:</b> Avoid sharing personal information, like bank details, with unverified parties. Never make payments directly to agents or property owners outside the platform.
              </li>
              <li>
                <b>Secure Financial Transactions:</b> Use secure and traceable payment methods recommended by the website. Avoid cash transactions to ensure proper accountability.
              </li>
              <li>
                <b>Report Suspicious Activities:</b> Report any suspicious or fraudulent behavior by agents or sellers to the platform immediately.
              </li>
              <li>
                <b>Consult Professionals:</b> Engage legal and financial advisors to verify property details and agreements before making commitments.
              </li>
            </ul>
            {!showMoreText ? (
              <>
                <button
                  style={{
                    background: "#004395",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginTop: "10px",
                  }}
                  onClick={handleReadMore}
                >
                  Read More
                </button>
              </>
            ) : (
              <>
                <h4 style={{ marginTop: "15px", marginBottom: "15px", fontWeight: "600", fontSize: "22px" }}>
                  Guidelines for Agents
                </h4>
                <ul>
                  <li>
                    <b>Professional Conduct:</b> Register on the platform with verified credentials, such as government-issued real estate licenses or certifications. Provide accurate and truthful property details without exaggeration.
                  </li>
                  <li>
                    <b>Transparency with Buyers and Owners:</b> Clearly disclose all terms, fees, and conditions to clients. Avoid concealing property flaws or any legal issues.
                  </li>
                  <li>
                    <b>No Misuse of the Platform:</b> Do not approach clients directly outside the website or attempt to bypass the platform to close deals. Violators will face account suspension and possible legal action.
                  </li>
                  <li>
                    <b>Respect Platform Policies:</b> Use the website’s tools for communication, listings, and transactions. Maintain professionalism in all interactions with buyers and property owners.
                  </li>
                </ul>
                <h4 style={{ marginTop: "15px", marginBottom: "15px", fontWeight: "600", fontSize: "22px" }}>
                  Guidelines for Property Owners
                </h4>
                <ul>
                  <li>
                    <b>Provide Authentic Information:</b> Upload accurate property descriptions, documents, and photos to ensure transparency. Misleading information may lead to listing suspension.
                  </li>
                  <li>
                    <b>Verify Agents and Buyers:</b> Ensure agents or buyers contacting you are verified through the platform. Do not share personal contact information until verification is complete.
                  </li>
                  <li>
                    <b>Secure Communication and Transactions:</b> Use the platform’s communication channels to discuss terms. Finalize financial agreements through secure and recommended payment systems.
                  </li>
                  <li>
                    <b>No Direct Client Approaches:</b> Avoid negotiating directly with clients outside the platform to maintain fairness and trust.
                  </li>
                </ul>
                <h4 style={{ marginTop: "15px", marginBottom: "15px", fontWeight: "600", fontSize: "22px" }}>
                  General Website Policies for All Users
                </h4>
                <ul>
                  <li>
                    <b>User Verification:</b> All users (buyers, agents, and owners) must complete identity verification before accessing full platform features.
                  </li>
                  <li>
                    <b>Strict Ban on Illegal Activities:</b> Fraudulent activities, including fake listings, false credentials, or attempts to bypass platform rules, will result in account termination and potential legal action.
                  </li>
                  <li>
                    <b>Transparent Communication:</b> Use only the platform’s messaging tools for communication to ensure safety and avoid misunderstandings.
                  </li>
                  <li>
                    <b>Reporting Misconduct:</b> A dedicated "Report Misuse" option is available for users to report any suspicious activities.
                  </li>
                  <li>
                    <b>Secure Payments Policy:</b> Users are encouraged to use escrow services or payment gateways endorsed by the platform for secure financial transactions.
                  </li>
                </ul>
                <p>By adhering to these guidelines, users can help create a safe and reliable environment for all participants in real estate transactions.</p>

                <div>
                  {/* Checkbox for terms and conditions */}
                  <label>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      style={{ marginRight: "10px" }}
                    />
                    I accept the terms and conditions and guidelines
                  </label>
                </div>

                <button
                  style={{
                    background: "#004395",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginTop: "10px",
                  }}
                  onClick={handleAccept}
                  disabled={!isChecked} // Disable the button if checkbox is not checked
                >
                  Accept
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <Hero />
      <Search />
      <Feature />
      {/* <Counter /> */}
      <New />
      <Services />
      <Partner />
      {/* <Testimonials /> */}
    </>
  );
};

export default Home;
