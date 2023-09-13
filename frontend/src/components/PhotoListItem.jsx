import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  return (
    <section className="photo-list__item">
      <div>
        <PhotoFavButton 
        photoId = {props.id}
        isFavorite = {props.favorites.includes(props.id)}
        toggleFavorite = {props.toggleFavorite} />
      <img className="photo-list__image" src={props.urls.regular} onClick={props.showModal}/>
      </div>
      <div className="photo-list__user-details">
        <div>
        <img className="photo-list__user-profile" src={props.user.profile} />
        </div>
        <div className="photo-list__user-info">
          {props.user.name}
          <div className="photo-list__user-location">
          {`${props.location.city}, ${props.location.country}`}
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default PhotoListItem;
