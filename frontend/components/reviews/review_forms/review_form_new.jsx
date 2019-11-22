import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant_id: parseInt(this.props.restaurant_id),
      food_rating: 5,
      service_rating: 5,
      value_rating: 5,
      noise_level: 5,
      ambience_rating: 5,
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
  }

  handleClick(e) {
     ;
    e.preventDefault();
    if (e.target.className.includes("next")) {
       ;
      this.setState({
        active_slide: this.state.active_slide + 1
      });
    } else if (e.target.className.includes("prev")) {
      this.setState({
        active_slide: this.state.active_slide - 1
      });
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

  handleMouseOver(val) {
     ;
    let fill_percent = this.handleFill(val);
    this.setState({
      fill_percent,
      fill: { width: `${fill_percent}%` }
    });
  }
  handleRating(val, rating_type) {
    let fill_percent = this.handleFill(val);
    this.setState({
      [rating_type]: val,
      fill_percent,
      fill: { width: `${fill_percent}%` }
    });
  }
  foodRating() {
    return (
      <section className="food-rating">
        <div className="review-content">
          <h3>How would you rate the food?</h3>
          <div className="review-stars">
            <div className="back-stars">
              <button
                onMouseOver={() => this.handleMouseOver(1)}
                onClick={() => this.handleRating(1, "food_rating")}
              >
                {" "}
                <FontAwesomeIcon icon="star" />{" "}
              </button>
              <button
                onMouseOver={() => this.handleMouseOver(2)}
                onClick={() => this.handleRating(2, "food_rating")}
              >
                <FontAwesomeIcon icon="star" />{" "}
              </button>
              <button
                onMouseOver={() => this.handleMouseOver(3)}
                onClick={() => this.handleRating(3, "food_rating")}
              >
                <FontAwesomeIcon icon="star" />{" "}
              </button>
              <button
                onMouseOver={() => this.handleMouseOver(4)}
                onClick={() => this.handleRating(4, "food_rating")}
              >
                <FontAwesomeIcon icon="star" />{" "}
              </button>
              <button
                onMouseOver={() => this.handleMouseOver(5)}
                onClick={() => this.handleRating(5, "food_rating")}
              >
                <FontAwesomeIcon icon="star" />{" "}
              </button>
              <div className="front-stars" style={this.state.fill}>
                <button
                  onMouseOver={() => this.handleMouseOver(1)}
                  onClick={() => this.handleRating(1, "food_rating")}
                >
                  <FontAwesomeIcon icon="star" />
                </button>
                <button
                  onMouseOver={() => this.handleMouseOver(2)}
                  onClick={() => this.handleRating(2, "food_rating")}
                >
                  <FontAwesomeIcon icon="star" />
                </button>
                <button
                  onMouseOver={() => this.handleMouseOver(3)}
                  onClick={() => this.handleRating(3, "food_rating")}
                >
                  <FontAwesomeIcon icon="star" />
                </button>
                <button
                  onMouseOver={() => this.handleMouseOver(4)}
                  onClick={() => this.handleRating(4, "food_rating")}
                >
                  <FontAwesomeIcon icon="star" />
                </button>
                <button
                  onMouseOver={() => this.handleMouseOver(5)}
                  onClick={() => this.handleRating(5, "food_rating")}
                >
                  <FontAwesomeIcon icon="star" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="review-icon">
          <span className="icon">
            <FontAwesomeIcon icon="pizza-slice" />
          </span>
        </div>
      </section>
    );
  }
  renderSlide() {
    switch (this.state.active_slide) {
      case 1:
        return this.foodRating();
      case 2:
        return <p>This is slide two</p>;
      case 3:
        return <p>This is slide three</p>;
      case 4:
        return <p>This is slide four</p>;
      default:
        return null;
    }
  }
  handleSubmit(e) {
    e.stopPropagation();
    e.preventDefault();
    const review = Object.assign({}, this.state);
    this.props.action(review).then(() => {
      return this.props.closeModal();
    });
    // this.props.history.push("/");
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
        <button className="cancel readon-blank">Cancel</button>
        <div className="nav-buttons">
          {this.state.active_slide !== 1 ? (
            <button className="readon-blank prev" onClick={this.handleClick}>
              Prev
            </button>
          ) : null}
          {this.state.active_slide !== 4 ? (
            <button className="readon next" onClick={this.handleClick}>
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
