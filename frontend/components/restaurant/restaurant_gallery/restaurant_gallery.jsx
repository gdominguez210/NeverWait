import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RestaurantGallery = props => {
  debugger;
  let imagesList = null;
  if (props.restaurant.photoUrls) {
    imagesList = props.restaurant.photoUrls.map(url => (
      <>
        <div className="gallery-item">
          <img src={`${url}`} />
        </div>
      </>
    ));
  }
  debugger;
  return (
    <>
      <section className="restaurant-gallery" id="photos">
        <h2>Photos</h2>
        <div className="img-gallery">
          {imagesList}
          {/* <div className="gallery-item">
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
          </div> */}
        </div>
      </section>
    </>
  );
};

export default RestaurantGallery;
