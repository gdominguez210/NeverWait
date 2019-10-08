import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class RestaurantForm extends React.Component {
  constructor(props) {
    super(props);
    debugger;
    this.state = {
      restaurant_id: this.props.match.params.restaurantId,
      total_rating: "",
      food_rating: "",
      service_rating: "",
      value_rating: "",
      ambience_rating: "",
      recommended: "",
      body: ""
    };
    debugger;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger;
    const review = Object.assign({}, this.state);
    this.props.action(review).then(this.props.closeModal);
    // this.props.history.push("/");
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
  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }
  header() {
    debugger;
    if (this.props.formType === "Create") {
      return (
        <h2>
          Hello {this.props.currentUser.fname}, how was your experience at
          restaurant?
        </h2>
      );
    } else if (this.props.formType === "Edit") {
      return <h2>Please update your review below:</h2>;
    }
  }

  render() {
    // const errors = this.props.errors;
    // debugger;
    // const errorItems = errors.map(error => {
    //   return (
    //     <li key={error.id} className="error">
    //       {error}
    //     </li>
    //   );
    // });
    // debugger;
    return (
      <>
        <div class="form-container">
          {this.header()}
          <hr />
          <form className="review" onSubmit={this.handleSubmit}>
            <div onClick={this.props.closeModal} className="close-x">
              <FontAwesomeIcon icon="times" />
            </div>
            <label>
              How would you rate the food?
              <select
                value={this.state.food_rating}
                onChange={this.update("food_rating")}
              >
                <option value="5">5 stars</option>
                <option value="4">4 stars</option>
                <option value="3">3 stars</option>
                <option value="2">2 stars</option>
                <option value="1">1 star</option>
              </select>
            </label>
            <label>
              How would you rate the service?
              <select
                value={this.state.service_rating}
                onChange={this.update("service_rating")}
              >
                <option value="5">5 stars</option>
                <option value="4">4 stars</option>
                <option value="3">3 stars</option>
                <option value="2">2 stars</option>
                <option value="1">1 star</option>
              </select>
            </label>
            <label>
              How would you rate the value?
              <select
                value={this.state.value_rating}
                onChange={this.update("value_rating")}
              >
                <option value="5">5 stars</option>
                <option value="4">4 stars</option>
                <option value="3">3 stars</option>
                <option value="2">2 stars</option>
                <option value="1">1 star</option>
              </select>
            </label>
            <label>
              How would you rate the noise level?
              <select
                value={this.state.noise_level}
                onChange={this.update("noise_level")}
              >
                <option value="5">5 stars</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
            </label>
            <label>
              How would you rate the ambience?
              <select
                value={this.state.ambience_rating}
                onChange={this.update("ambience_rating")}
              >
                <option value="5">5 stars</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
            </label>
            <label htmlFor="body">Review</label>
            <textarea
              name="body"
              id="body"
              value={this.state.body}
              onChange={this.update("body")}
              cols="30"
              rows="10"
            ></textarea>
            <button className="readon-submit">{this.props.formType}</button>
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(RestaurantForm);
