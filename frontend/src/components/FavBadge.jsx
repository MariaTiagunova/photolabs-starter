import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, handleShowFavorites }) => {
    const handleClick = () => {
        handleShowFavorites();
    };
    return (
        <div className='fav-badge' onClick={handleClick}>
            <FavIcon displayAlert={!!isFavPhotoExist} selected={true} />
        </div>
    );
};

export default FavBadge;
