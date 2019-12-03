import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import Modal from "./modal/modal";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => (
  <>
    <header>
      <div className="logo-container">
        <Link to="/">
          <div className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
            >
              <title xmlns="http://www.w3.org/2000/svg">NeverWait</title>
              <path
                d="M29.481,8.094l-2.643,2.643a11.558,11.558,0,1,0,2.574,2.574l2.643-2.643a1.82,1.82,0,0,0-2.574-2.574ZM26.888,26.93a9.665,9.665,0,1,1,0-13.668A9.676,9.676,0,0,1,26.888,26.93Z"
                fill="#2b9abf"
              />
              <path
                d="M34.158,5.992A19.946,19.946,0,0,0,5.95,34.2,19.946,19.946,0,0,0,34.158,5.992ZM32.591,32.633a17.722,17.722,0,1,1,0-25.074A17.75,17.75,0,0,1,32.591,32.633Z"
                fill="#2b9abf"
              />
              <circle cx="20" cy="20" r="8" fill="#2b9abf" />
            </svg>
          </div>
          <div className="logo-content">
            <h1>NeverWait</h1>
            <p>
              the <strong>OpenTable</strong> clone
            </p>
          </div>
        </Link>
      </div>
      <GreetingContainer />
    </header>
  </>
);
