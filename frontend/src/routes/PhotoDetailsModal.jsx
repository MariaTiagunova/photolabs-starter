import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import '../styles/PhotoListItem.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { urls, user, location } = props.photo;
  const similarPhotos = props.similarPhotos;
  // Convert similar_photos object values into an array
  const similarPhotosArray = Object.values(similarPhotos);
  // Check if props.favorites is defined and contains the id
  const isFavorite = props.favorites && props.favorites.includes(props.photo.id);

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={props.closeModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <section className='photo-details-modal__images'>
      <PhotoFavButton 
        photoId = {props.photo.id}
        isFavorite={isFavorite}
        toggleFavorite = {props.toggleFavorite} />
        <img className='photo-details-modal__image' src={urls.full} />
        <div className='photo-details-modal__photographer-details'>
          <img className="photo-list__user-profile" src={user.profile} />
          <div className="photo-list__user-info">
            {user.name}
            <div className="photo-list__user-location">
              {`${location.city}, ${location.country}`}
            </div>
          </div>
        </div>
        <div className='photo-details-modal__header'>
          Similar photos
        </div>
        <div>
        <PhotoList favorites={props.favorites} toggleFavorite={props.toggleFavorite} showModal={props.showModal} photos={similarPhotosArray} /> {/* Pass similarPhotos as photos */}
        </div>
      </section>
    </div>
  );
};

export default PhotoDetailsModal;
