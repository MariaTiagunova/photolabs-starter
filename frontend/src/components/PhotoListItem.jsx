import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  /* Insert React */
  return (
  <article>
  <img
      src={props.imageSource}
    />
    <br/>
    <img
      src={props.profile}
    />
    <br/>
    <p>{props.username}</p>
    <p>{props.location.city} {props.location.country}</p>
</article>
)
};

export default PhotoListItem;
