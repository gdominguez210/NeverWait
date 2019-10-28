import React from "react";
import { Link } from "react-router-dom";
import { openModal } from "../../actions/modal_actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition } from "react-transition-group";
class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropDown: false
    };
    this.toggleDropDown = this.toggleDropDown.bind(this);
  }

  sessionLinks() {
    return (
      <nav className="login-signup">
        <button
          onClick={() => this.props.openModal("signup")}
          className="readon"
        >
          Sign Up
        </button>
        <button
          onClick={() => this.props.openModal("login")}
          className="readon-blank"
        >
          Sign In
        </button>
      </nav>
    );
  }

  toggleDropDown() {
    debugger;
    if (this.state.showDropDown) {
      this.setState({
        showDropDown: false
      });
    } else {
      this.setState({
        showDropDown: true
      });
    }
  }
  dropDownMenu() {
    debugger;
    let display = null;
    if (this.state.showDropDown) {
      return (
        <div className="drop-down" onClick={this.toggleDropDown}>
          <span className="toggle-button">
            <FontAwesomeIcon icon="chevron-down" />
          </span>
        </div>
      );
    } else {
      return (
        <div className="drop-down" onClick={this.toggleDropDown}>
          <span className="toggle-button">
            <FontAwesomeIcon icon="chevron-up" />
          </span>
          <ul>
            <li>
              <Link
                to={`/users/${this.props.currentUser.id}`}
                onClick={this.toggleDropDown}
              >
                <span class="icon-container">
                  <FontAwesomeIcon icon="user" />
                </span>
                My Profile
              </Link>
            </li>
            <li>
              <Link
                to={`/users/${this.props.currentUser.id}/reservations`}
                onClick={this.toggleDropDown}
              >
                <span class="icon-container">
                  <FontAwesomeIcon icon="calendar-alt" />
                </span>
                My Reservations
              </Link>
            </li>
            <li>
              <Link
                to={`/users/${this.props.currentUser.id}/favorites`}
                onClick={this.toggleDropDown}
              >
                <span class="icon-container">
                  <FontAwesomeIcon icon="star" />
                </span>
                My Favorites
              </Link>
            </li>
            <li>
              <Link to="" onClick={this.props.logout}>
                <span class="icon-container">
                  <FontAwesomeIcon icon="sign-out-alt" />
                </span>
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      );
    }
  }

  personalGreeting() {
    let dropDown = this.dropDownMenu();
    debugger;
    return (
      <div className="header-greeting" onClick={this.toggleDropDown}>
        <p className="header-name">Hi, {this.props.currentUser.fname}</p>
        <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
          {dropDown}
        </CSSTransition>
      </div>
    );
  }

  render() {
    let display = null;
    this.props.currentUser
      ? (display = this.personalGreeting())
      : (display = this.sessionLinks());
    return display;
  }
}

export default Greeting;
