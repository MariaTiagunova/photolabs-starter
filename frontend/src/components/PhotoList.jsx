import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {

  return (
    <ul className="photo-list">
      {props.photos.map((photo) => (
        <PhotoListItem key={photo.id} {...photo} favorites={props.favorites} toggleFavorite={props.toggleFavorite} showModal={props.showModal}/>
      ))}
    </ul>
  );
};

export default PhotoList;
