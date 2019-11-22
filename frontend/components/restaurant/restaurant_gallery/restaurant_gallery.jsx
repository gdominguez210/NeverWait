import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition } from "react-transition-group";
import LazyLoad from "react-lazyload";

const RestaurantGallery = props => {
  let imagesList = null;
  if (
    props.restaurant.photoUrls instanceof Array &&
    props.restaurant.photoUrls.length >= 1
  ) {
    imagesList = props.restaurant.photoUrls.map((url, idx) => (
      <div className="gallery-item" key={`gallery-${idx}`}>
        <LazyLoad height={281}>
          <img src={`${url}`} width="242" height="281" />
        </LazyLoad>
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
