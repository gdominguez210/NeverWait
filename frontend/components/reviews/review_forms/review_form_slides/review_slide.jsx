import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition } from "react-transition-group";
export class ReviewSlide extends React.Component {
  constructor(props) {
    super(props);
     ;

    this.handleVariant = this.handleVariant.bind(this);
    this.renderStars = this.renderStars.bind(this);
    this.renderVarirant = this.renderVariant.bind(this);
    this.renderBody = this.renderBody.bind(this);
  }

  componentDidUpdate(prevProps) {
     ;
    if (
      prevProps.type !== this.props.type &&
      this.props.state[`${this.props.type}_rating`] === 0
    ) {
      this.props.handleFillReset();
    } else if (
      prevProps.type !== this.props.type &&
      this.props.state[`${this.props.type}_rating`] !== 0
    ) {
      this.props.handleFillReset(this.props.state[`${this.props.type}_rating`]);
    }
  }

  renderIcon(type) {
    switch (type) {
      case "food":
        return (
          <span className="icon">
            <FontAwesomeIcon icon="pizza-slice" />
          </span>
        );
      case "service":
        return (
          <span className="icon">
            <FontAwesomeIcon icon="concierge-bell" />
          </span>
        );
      case "value":
        return (
          <span className="icon">
            <FontAwesomeIcon icon="money-bill-wave" />
          </span>
        );
      case "noise":
        return (
          <span className="icon">
            <FontAwesomeIcon icon="signal" />
          </span>
        );
      case "ambience":
        return (
          <span className="icon">
            <FontAwesomeIcon icon="cocktail" />
          </span>
        );
      case "body":
        return (
          <span className="icon">
            <FontAwesomeIcon icon="comment-alt" />
          </span>
        );
      default:
        return null;
    }
  }

  renderStarsAlt(type, reviewType) {
    return (
      <>
        <h3>
          <span className="rating-category">{type}</span> Rating
        </h3>
        <div
          className="review-stars"
          onMouseOut={() =>
            this.props.handleMouseOut(this.props.state[reviewType])
          }
        >
          <button
            onMouseOver={() => this.props.handleMouseOver(1)}
            onClick={() => this.props.handleRating(1, reviewType)}
            className={this.props.state.fill_percent >= 1 ? "active" : null}
          >
            <FontAwesomeIcon icon="star" />{" "}
          </button>
          <button
            onMouseOver={() => this.props.handleMouseOver(2)}
            onClick={() => this.props.handleRating(2, reviewType)}
            className={this.props.state.fill_percent >= 2 ? "active" : null}
          >
            <FontAwesomeIcon icon="star" />{" "}
          </button>
          <button
            onMouseOver={() => this.props.handleMouseOver(3)}
            onClick={() => this.props.handleRating(3, reviewType)}
            className={this.props.state.fill_percent >= 3 ? "active" : null}
          >
            <FontAwesomeIcon icon="star" />{" "}
          </button>
          <button
            onMouseOver={() => this.props.handleMouseOver(4)}
            onClick={() => this.props.handleRating(4, reviewType)}
            className={this.props.state.fill_percent >= 4 ? "active" : null}
          >
            <FontAwesomeIcon icon="star" />{" "}
          </button>
          <button
            onMouseOver={() => this.props.handleMouseOver(5)}
            onClick={() => this.props.handleRating(5, reviewType)}
            className={this.props.state.fill_percent >= 5 ? "active" : null}
          >
            <FontAwesomeIcon icon="star" />{" "}
          </button>
        </div>
      </>
    );
  }
  renderStars(type, reviewType) {
    return (
      <>
        <h3>
          <span className="rating-category">{type}</span> Rating
        </h3>
        <div
          className="review-stars"
          onMouseOut={() =>
            this.props.handleMouseOut(this.props.state[reviewType])
          }
        >
          <div className="back-stars">
            <button
              onMouseOver={() => this.props.handleMouseOver(1)}
              onClick={() => this.props.handleRating(1, reviewType)}
            >
              {" "}
              <FontAwesomeIcon icon="star" />{" "}
            </button>
            <button
              onMouseOver={() => this.props.handleMouseOver(2)}
              onClick={() => this.props.handleRating(2, reviewType)}
            >
              <FontAwesomeIcon icon="star" />{" "}
            </button>
            <button
              onMouseOver={() => this.props.handleMouseOver(3)}
              onClick={() => this.props.handleRating(3, reviewType)}
            >
              <FontAwesomeIcon icon="star" />{" "}
            </button>
            <button
              onMouseOver={() => this.props.handleMouseOver(4)}
              onClick={() => this.props.handleRating(4, reviewType)}
            >
              <FontAwesomeIcon icon="star" />{" "}
            </button>
            <button
              onMouseOver={() => this.props.handleMouseOver(5)}
              onClick={() => this.props.handleRating(5, reviewType)}
            >
              <FontAwesomeIcon icon="star" />{" "}
            </button>
            <div className="front-stars" style={this.props.fill}>
              <button
                onMouseOver={() => this.props.handleMouseOver(1)}
                onClick={() => this.props.handleRating(1, reviewType)}
              >
                <FontAwesomeIcon icon="star" />
              </button>
              <button
                onMouseOver={() => this.props.handleMouseOver(2)}
                onClick={() => this.props.handleRating(2, reviewType)}
              >
                <FontAwesomeIcon icon="star" />
              </button>
              <button
                onMouseOver={() => this.props.handleMouseOver(3)}
                onClick={() => this.props.handleRating(3, reviewType)}
              >
                <FontAwesomeIcon icon="star" />
              </button>
              <button
                onMouseOver={() => this.props.handleMouseOver(4)}
                onClick={() => this.props.handleRating(4, reviewType)}
              >
                <FontAwesomeIcon icon="star" />
              </button>
              <button
                onMouseOver={() => this.props.handleMouseOver(5)}
                onClick={() => this.props.handleRating(5, reviewType)}
              >
                <FontAwesomeIcon icon="star" />
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  renderNoiseLevels(type, reviewType) {
    return (
      <>
        <h3>
          <span className="rating-category">{type}</span> Level
        </h3>
        <div className="noise-level-buttons">
          <button
            className={
              this.props.state[reviewType] === 1
                ? "readon plain active"
                : "readon plain"
            }
            onClick={() => this.props.handleRating(1, reviewType)}
          >
            Very Quiet
          </button>
          <button
            className={
              this.props.state[reviewType] === 2
                ? "readon plain active"
                : "readon plain"
            }
            onClick={() => this.props.handleRating(2, reviewType)}
          >
            Quiet
          </button>
          <button
            className={
              this.props.state[reviewType] === 3
                ? "readon plain active"
                : "readon plain"
            }
            onClick={() => this.props.handleRating(3, reviewType)}
          >
            Moderate
          </button>
          <button
            className={
              this.props.state[reviewType] === 4
                ? "readon plain active"
                : "readon plain"
            }
            onClick={() => this.props.handleRating(4, reviewType)}
          >
            Loud
          </button>
          <button
            className={
              this.props.state[reviewType] === 5
                ? "readon plain active"
                : "readon plain"
            }
            onClick={() => this.props.handleRating(5, reviewType)}
          >
            Very Loud
          </button>
        </div>
      </>
    );
  }

  renderBody() {
     ;
    return (
      <>
        <h3>Leave a comment for your review:</h3>
        <textarea
          name="body"
          id="body"
          value={this.props.state.body}
          onChange={this.props.update("body")}
        ></textarea>
        <button
          className={
            this.props.state.body.length > 0 ? "readon" : "readon disabled"
          }
          onClick={() => this.props.handleSubmit()}
        >
          Submit
        </button>
      </>
    );
  }
  handleVariant(type) {
    if (type === "noise") {
      return `${type}_level`;
    } else if (type === "body") {
      return "body";
    } else {
      return `${type}_rating`;
    }
  }
  renderVariant(type, reviewType) {
    if (type === "noise") {
      return this.renderNoiseLevels(type, reviewType);
    } else if (type === "body") {
      return this.renderBody();
    } else {
      return this.renderStarsAlt(type, reviewType);
    }
  }
  render() {
    const { type } = this.props;
    const reviewType = this.handleVariant(type);
    return (
      <section className={`${type}-rating`}>
        <div className="review-content">
          {this.renderVariant(type, reviewType)}
        </div>
        {this.props.state.active_slide === 6 ? null : (
          <div className="review-icon-container">
            <div className="review-icon">{this.renderIcon(type)}</div>
          </div>
        )}
      </section>
    );
  }
}
