import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReviewSlide } from "./review_form_slides/review_slide";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant_id: parseInt(this.props.restaurant_id),
      food_rating: 0,
      service_rating: 0,
      value_rating: 0,
      noise_level: 0,
      ambience_rating: 0,
      body: "",
      active_slide: 1,
      fill_percent: false,
      fill: {
        width: `$0%`
      }
    };
    this.restaurant = this.props.restaurants[this.props.restaurant_id];
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleFill = this.handleFill.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleFillReset = this.handleFillReset.bind(this);
    this.handleDisabled = this.handleDisabled.bind(this);
  }

  handleSubmit(e) {
    const review = Object.assign({}, this.state);
    if (this.state.body.length > 0) {
      debugger;
      this.props
        .action(review)
        .then(() => {
          return this.props.closeModal();
        })
        .fail(() => this.props.closeModal());
    }
  }
  handleClick(e) {
    e.preventDefault();
    if (
      e.target.className.includes("next") &&
      this.handleDisabled(this.state.active_slide)
    ) {
      this.setState({
        active_slide: this.state.active_slide + 1
      });
    } else if (e.target.className.includes("prev")) {
      this.setState({
        active_slide: this.state.active_slide - 1
      });
    }
  }

  handleDisabled(slide) {
    switch (slide) {
      case 1:
        return this.state.food_rating > 0 ? true : false;
      case 2:
        return this.state.service_rating > 0 ? true : false;
      case 3:
        return this.state.value_rating > 0 ? true : false;
      case 5:
        return this.state.noise_level > 0 ? true : false;
      case 4:
        return this.state.ambience_rating > 0 ? true : false;
      case 6:
        return this.state.body.length > 0 ? true : false;
      default:
        return false;
    }
  }

  handleFill(val) {
    switch (val) {
      case 1:
        return 20;
      case 2:
        return 40;
      case 3:
        return 60;
      case 4:
        return 80;
      case 5:
        return 100;
      default:
        return 0;
    }
  }

  handleFillReset(val) {
    debugger;
    let fill_percent = val;
    debugger;
    this.setState({
      fill_percent,
      fill: { width: `${fill_percent}%` }
    });
  }
  handleMouseOver(val) {
    // let fill_percent = this.handleFill(val);
    debugger;
    let fill_percent = val;
    this.setState({
      fill_percent,
      fill: { width: `${fill_percent}%` }
    });
  }
  handleMouseOut(val) {
    let fill_percent = val;
    debugger;
    this.setState({
      fill_percent,
      fill: { width: `${fill_percent}%` }
    });
  }
  handleRating(val, rating_type) {
    let fill_percent = val;
    debugger;
    this.setState({
      [rating_type]: val,
      fill_percent,
      fill: { width: `${fill_percent}%` }
    });
  }

  renderSlide() {
    switch (this.state.active_slide) {
      case 1:
        return (
          <ReviewSlide
            handleMouseOver={this.handleMouseOver}
            handleMouseOut={this.handleMouseOut}
            handleRating={this.handleRating}
            handleFillReset={this.handleFillReset}
            type="food"
            fill={this.state.fill}
            state={this.state}
          />
        );
      case 2:
        return (
          <ReviewSlide
            handleMouseOver={this.handleMouseOver}
            handleMouseOut={this.handleMouseOut}
            handleRating={this.handleRating}
            handleFillReset={this.handleFillReset}
            type="service"
            fill={this.state.fill}
            state={this.state}
          />
        );
      case 3:
        return (
          <ReviewSlide
            handleMouseOver={this.handleMouseOver}
            handleMouseOut={this.handleMouseOut}
            handleRating={this.handleRating}
            handleFillReset={this.handleFillReset}
            type="value"
            fill={this.state.fill}
            state={this.state}
          />
        );
      case 5:
        return (
          <ReviewSlide
            handleMouseOver={this.handleMouseOver}
            handleMouseOut={this.handleMouseOut}
            handleRating={this.handleRating}
            handleFillReset={this.handleFillReset}
            type="noise"
            fill={this.state.fill}
            state={this.state}
          />
        );
      case 4:
        return (
          <ReviewSlide
            handleMouseOver={this.handleMouseOver}
            handleMouseOut={this.handleMouseOut}
            handleRating={this.handleRating}
            handleFillReset={this.handleFillReset}
            type="ambience"
            fill={this.state.fill}
            state={this.state}
          />
        );
      case 6:
        return (
          <ReviewSlide
            handleMouseOver={this.handleMouseOver}
            handleMouseOut={this.handleMouseOut}
            handleRating={this.handleRating}
            handleFillReset={this.handleFillReset}
            handleSubmit={this.handleSubmit}
            type="body"
            fill={this.state.fill}
            state={this.state}
            update={this.update}
          />
        );
      default:
        return null;
    }
  }

  renderErrors() {
    const errors = this.props.errors;
    if (errors.length > 0) {
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
    if (this.props.formType === "Create") {
      return (
        <section className="review-header">
          <h2>
            Hello {this.props.currentUser.fname}, how was your experience at{" "}
            {this.restaurant.name}?
          </h2>
        </section>
      );
    } else if (this.props.formType === "Edit") {
      return <h2>Please update your review below:</h2>;
    }
  }
  renderNav() {
    return (
      <div className="nav-container">
        <button className="readon danger" onClick={this.props.closeModal}>
          Cancel
        </button>
        <div className="progress-dots">
          <span
            className={this.state.active_slide >= 1 ? "icon active" : "icon"}
          >
            <FontAwesomeIcon icon="circle" />
          </span>
          <span
            className={this.state.active_slide >= 2 ? "icon active" : "icon"}
          >
            <FontAwesomeIcon icon="circle" />
          </span>
          <span
            className={this.state.active_slide >= 3 ? "icon active" : "icon"}
          >
            <FontAwesomeIcon icon="circle" />
          </span>
          <span
            className={this.state.active_slide >= 4 ? "icon active" : "icon"}
          >
            <FontAwesomeIcon icon="circle" />
          </span>
          <span
            className={this.state.active_slide >= 5 ? "icon active" : "icon"}
          >
            <FontAwesomeIcon icon="circle" />
          </span>
          <span
            className={this.state.active_slide >= 6 ? "icon active" : "icon"}
          >
            <FontAwesomeIcon icon="circle" />
          </span>
        </div>
        <div className="nav-buttons">
          {this.state.active_slide !== 1 ? (
            <button className="readon-blank prev" onClick={this.handleClick}>
              Prev
            </button>
          ) : null}
          {this.state.active_slide !== 6 ? (
            <button
              className={
                this.handleDisabled(this.state.active_slide)
                  ? "readon next"
                  : "readon next disabled"
              }
              onClick={this.handleClick}
            >
              Next
            </button>
          ) : null}
        </div>
      </div>
    );
  }

  render() {
    return (
      <>
        <div className="form-container review-form">
          {this.header()}
          {this.renderSlide()}
          {this.renderNav()}
        </div>
      </>
    );
  }
}

export default withRouter(ReviewForm);
