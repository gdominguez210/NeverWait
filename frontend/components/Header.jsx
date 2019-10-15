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
            <FontAwesomeIcon icon="coffee" />
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
