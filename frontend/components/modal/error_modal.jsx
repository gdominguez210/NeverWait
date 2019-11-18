import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ErrorModal extends React.Component {
  constructor(props) {
    super(props);
    this.renderErrors = this.renderErrors.bind(this);
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
  render() {
    return (
      <div className="form-container">
        <div onClick={this.props.closeModal} className="close-x">
          <FontAwesomeIcon icon="times" />
        </div>
        {this.renderErrors()}
      </div>
    );
  }
}

export default ErrorModal;
