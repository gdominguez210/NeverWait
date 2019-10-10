import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition } from "react-transition-group";

const RestaurantGallery = props => {
  let imagesList = null;
  debugger;
  if (
    props.restaurant.photoUrls instanceof Array &&
    props.restaurant.photoUrls.length >= 1
  ) {
    imagesList = props.restaurant.photoUrls.map((url, idx) => (
      <div className="gallery-item" key={`gallery-${idx}`}>
        <img src={`${url}`} />
      </div>
    ));
  } else {
    imagesList = (
      <>
        <div className="gallery-item">
          <div className="icon">
            <FontAwesomeIcon icon="image" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="icon">
            <FontAwesomeIcon icon="image" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="icon">
            <FontAwesomeIcon icon="image" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="icon">
            <FontAwesomeIcon icon="image" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="icon">
            <FontAwesomeIcon icon="image" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="icon">
            <FontAwesomeIcon icon="image" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="icon">
            <FontAwesomeIcon icon="image" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="icon">
            <FontAwesomeIcon icon="image" />
          </div>
        </div>
        <div className="gallery-item">
          <div className="icon">
            <FontAwesomeIcon icon="image" />
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <section className="restaurant-gallery" id="photos">
        <h2>Photos</h2>
        <div className="img-gallery">{imagesList}</div>
      </section>
    </>
  );
};

export default RestaurantGallery;
