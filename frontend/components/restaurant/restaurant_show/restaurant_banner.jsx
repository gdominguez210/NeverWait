import React from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RestaurantBanner = props => {
  const {
    restaurant,
    deleteRestaurant,
    currentUser,
    deleteFavorite,
    createFavorite
  } = props;

  let banner;
  if (restaurant.image_url) {
    banner = {
      backgroundImage: `url(${restaurant.image_url})`
    };
  } else {
    banner = {};
  }
  const manageFavoriteOptions = () => {
    let result;
    if (currentUser) {
      if (restaurant.favorite_ids) {
        if (
          currentUser.favorite_ids.some(el =>
            restaurant.favorite_ids.includes(el)
          )
        ) {
          let favorite_id = currentUser.favorite_ids.find(el =>
            restaurant.favorite_ids.includes(el)
          );
          result = (
            <div className="button-container">
              <button
                className="readon danger"
                onClick={() => deleteFavorite(favorite_id, restaurant.id)}
              >
                <span className="icon">
                  <FontAwesomeIcon icon="times" />
                </span>
                Delete Favorite
              </button>
            </div>
          );
        } else {
          result = (
            <div className="button-container">
              <button
                className="readon plain"
                onClick={() =>
                  createFavorite({
                    user_id: currentUser.id,
                    restaurant_id: restaurant.id
                  })
                }
              >
                <span className="icon">
                  <FontAwesomeIcon icon="bookmark" />
                </span>
                Favorite this Restaurant
              </button>
            </div>
          );
        }
        return result;
      }
    }
  };
  const manageRestaurantOptions = () => {
    let result;
    if (currentUser) {
      if (currentUser.id === restaurant.owner_id) {
        result = (
          <div className="button-container">
            <button
              className="readon danger"
              onClick={() =>
                deleteRestaurant(restaurant.id).then(() =>
                  this.history.push("/")
                )
              }
            >
              <span className="icon">
                <FontAwesomeIcon icon="times" />
              </span>{" "}
              Delete Restaurant
            </button>
            <Link to={`/restaurants/${restaurant.id}/edit`} className="readon">
              <span className="icon">
                <FontAwesomeIcon icon="cog" />
              </span>{" "}
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
          {manageFavoriteOptions()}
          <div className="featured-img" style={banner}></div>
        </section>
      </CSSTransition>
    </>
  );
};

export default RestaurantBanner;
