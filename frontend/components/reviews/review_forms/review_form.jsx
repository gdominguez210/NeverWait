import React from "react";
import { withRouter } from "react-router-dom";
import AdditionalItems from "./additional_items";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class RestaurantForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    debugger;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger;
    const review = Object.assign({}, this.state);
    this.props.processForm(review).then(this.props.closeModal);
    // this.props.history.push("/");
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  renderErrors() {
    const errors = this.props.errors;
    if (errors.length > 0) {
      debugger;
      return (
        <ul className="errors">
          {errors.map((error, i) => (
            <li className="error" key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }
  header() {
    debugger;
    if (this.props.formType === "Create") {
      return (
        <h2>
          Hello {this.props.currentUser}, how was your experience at restaurant?{" "}
        </h2>
      );
    } else if (this.props.formType === "Edit") {
      return <h2>Please update your review below:</h2>;
    }
  }

  render() {
    const errors = this.props.errors;
    debugger;
    const errorItems = errors.map(error => {
      return (
        <li key={error.id} className="error">
          {error}
        </li>
      );
    });
    debugger;
    return (
      <>
        <div class="form-container">
          {this.header()}
          <hr />
          <form onSubmit={this.handleSubmit}>
            <div onClick={this.props.closeModal} className="close-x">
              <FontAwesomeIcon icon="times" />
            </div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Username*"
              value={this.state.username}
              onChange={this.update("username")}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password*"
              value={this.state.password}
              onChange={this.update("password")}
            />
            <ul className="errors">{errorItems}</ul>
            <button className="readon-submit">{this.props.formType}</button>
          </form>
          <hr />
          <p>Don't want to complete the form?</p>
        </div>
      </>
    );
  }
}

export default withRouter(RestaurantForm);
