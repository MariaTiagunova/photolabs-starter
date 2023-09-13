import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photoId, isFavorite, toggleFavorite }) {
  const handleClick = () => {
    toggleFavorite(photoId);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
      <FavIcon selected={isFavorite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;