import React from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
const RestaurantBanner = props => {
  const { restaurant, deleteRestaurant } = props;
  debugger;
  let banner;
  if (props.restaurant.image_url) {
    banner = {
      backgroundImage: `url(${props.restaurant.image_url})`
    };
  } else {
    banner = {};
  }

  const manageRestaurantOptions = () => {
    debugger;
    let result;
    if (props.currentUser) {
      if (props.currentUser.id === restaurant.owner_id) {
        result = (
          <div class="button-container">
            <button
              className="readon"
              onClick={() =>
                deleteRestaurant(restaurant.id).then(() =>
                  this.props.history.push("/")
                )
              }
            >
              Delete
            </button>
            <Link to={`/restaurants/${restaurant.id}/edit`} className="readon">
              Edit Restaurant
            </Link>
          </div>
        );
      }
    } else {
      result = null;
    }
    return result;
  };

  return (
    <>
      <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
        <section className="restaurant-featured-image">
          {manageRestaurantOptions()}
          <div className="featured-img" style={banner}></div>
        </section>
      </CSSTransition>
    </>
  );
};

export default RestaurantBanner;
