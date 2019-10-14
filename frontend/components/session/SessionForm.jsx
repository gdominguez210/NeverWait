import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      fname: "",
      lname: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
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
    const errors = this.props.errors || [];

    return (
      <ul>
        {errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }
  demoUser() {
    const demo_user = { username: "Demo", password: "test123" };
    return (
      <button
        className="readon-outline"
        onClick={() => this.props.demo(demo_user).then(this.props.closeModal)}
      >
        <p>
          <i className="far fa-user"></i> Continue as Demo User
        </p>
      </button>
    );
  }
  header() {
    if (this.props.formType === "Signup") {
      return <h2>Welcome to NeverWait</h2>;
    } else if (this.props.formType === "Login") {
      return <h2>Please Sign In</h2>;
    }
  }
  signup() {
    return (
      <>
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          placeholder="First Name*"
          value={this.state.fname}
          onChange={this.update("fname")}
        />
        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          placeholder="Last Name*"
          value={this.state.lname}
          onChange={this.update("lname")}
        />
      </>
    );
  }

  footer() {
    if (this.props.formType === "Login") {
      return (
        <div className="form-footer">
          <p>New to NeverWait? {this.props.otherForm}</p>
        </div>
      );
    }
  }

  render() {
    const errors = this.props.errors;

    const errorItems = errors.map(error => {
      return (
        <li key={error.id} className="error">
          {error}
        </li>
      );
    });

    let addInfo = null;
    if (this.props.formType === "Signup") {
      addInfo = this.signup();
    }
    return (
      <>
        <div className="form-container">
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
            {addInfo}
            <ul className="errors">{errorItems}</ul>
            <button className="readon-submit">{this.props.formType}</button>
          </form>
          <hr />
          <p>Don't want to complete the form?</p>
          {this.demoUser()}
          {this.footer()}
        </div>
      </>
    );
  }
}

export default withRouter(SessionForm);
