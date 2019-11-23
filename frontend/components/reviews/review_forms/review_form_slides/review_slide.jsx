import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class ReviewSlide extends React.Component {
  constructor(props) {
    super(props);
    debugger;
  }

  componentDidUpdate(prevProps) {
    debugger;
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

  renderIcon(type) {}
  render() {
    return (
      <section className={`${this.props.type}-rating`}>
        <div className="review-content">
          <h3>How would you rate the {this.props.type}</h3>
          <div
            className="review-stars"
            onMouseOut={() =>
              this.props.handleMouseOut(
                this.props.state[`${this.props.type}_rating`]
              )
            }
          >
            <div className="back-stars">
              <button
                onMouseOver={() => this.props.handleMouseOver(1)}
                onClick={() =>
                  this.props.handleRating(1, `${this.props.type}_rating`)
                }
              >
                {" "}
                <FontAwesomeIcon icon="star" />{" "}
              </button>
              <button
                onMouseOver={() => this.props.handleMouseOver(2)}
                onClick={() =>
                  this.props.handleRating(2, `${this.props.type}_rating`)
                }
              >
                <FontAwesomeIcon icon="star" />{" "}
              </button>
              <button
                onMouseOver={() => this.props.handleMouseOver(3)}
                onClick={() =>
                  this.props.handleRating(3, `${this.props.type}_rating`)
                }
              >
                <FontAwesomeIcon icon="star" />{" "}
              </button>
              <button
                onMouseOver={() => this.props.handleMouseOver(4)}
                onClick={() =>
                  this.props.handleRating(4, `${this.props.type}_rating`)
                }
              >
                <FontAwesomeIcon icon="star" />{" "}
              </button>
              <button
                onMouseOver={() => this.props.handleMouseOver(5)}
                onClick={() =>
                  this.props.handleRating(5, `${this.props.type}_rating`)
                }
              >
                <FontAwesomeIcon icon="star" />{" "}
              </button>
              <div className="front-stars" style={this.props.fill}>
                <button
                  onMouseOver={() => this.props.handleMouseOver(1)}
                  onClick={() =>
                    this.props.handleRating(1, `${this.props.type}_rating`)
                  }
                >
                  <FontAwesomeIcon icon="star" />
                </button>
                <button
                  onMouseOver={() => this.props.handleMouseOver(2)}
                  onClick={() =>
                    this.props.handleRating(2, `${this.props.type}_rating`)
                  }
                >
                  <FontAwesomeIcon icon="star" />
                </button>
                <button
                  onMouseOver={() => this.props.handleMouseOver(3)}
                  onClick={() =>
                    this.props.handleRating(3, `${this.props.type}_rating`)
                  }
                >
                  <FontAwesomeIcon icon="star" />
                </button>
                <button
                  onMouseOver={() => this.props.handleMouseOver(4)}
                  onClick={() =>
                    this.props.handleRating(4, `${this.props.type}_rating`)
                  }
                >
                  <FontAwesomeIcon icon="star" />
                </button>
                <button
                  onMouseOver={() => this.props.handleMouseOver(5)}
                  onClick={() =>
                    this.props.handleRating(5, `${this.props.type}_rating`)
                  }
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
}
