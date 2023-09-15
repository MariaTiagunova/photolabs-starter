import React, { useState } from 'react';

// import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';

import topics from 'mocks/topics';
import photos from 'mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// const photos = new Array(3).fill(sampleDataForPhotoListItem);
// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favorites, setFavorites] = useState([]);
  const [modal, setModal] = useState(null);
  const selectedPhotoId = modal;
  const selectedPhoto = photos.find((photo) => photo.id === selectedPhotoId);

  const toggleFavorite = (photoId) => {
    if (favorites.includes(photoId)) {
      setFavorites(favorites.filter((id) => id !== photoId));
    } else {
      setFavorites([...favorites, photoId]);
    }
  };
  const showModal = (photoId) => {
    setModal(photoId);
  };

  const closeModal = () => {
    setModal(null);
  }

  return (
    <div className="App">
      <HomeRoute topics = {topics} photos = {photos} favorites={favorites} toggleFavorite={toggleFavorite} isFavPhotoExist={(favorites.length > 0)} showModal={showModal}/>
      {modal && 
      <PhotoDetailsModal photo={selectedPhoto}
      similarPhotos={selectedPhoto.similar_photos} // Pass similar photos data
      closeModal={closeModal}/>}
    </div>
  );
};

export default App;
