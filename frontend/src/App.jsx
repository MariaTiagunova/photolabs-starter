import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Import the custom hook
import { useApplicationData } from 'hooks/useApplicationData';

const App = () => {
  // Use the custom hook to access state and actions
  const {
    favorites,
    modal,
    toggleFavorite,
    showModal,
    closeModal,
  } = useApplicationData();

  const selectedPhotoId = modal;
  const selectedPhoto = photos.find((photo) => photo.id === selectedPhotoId);

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        isFavPhotoExist={favorites.length > 0}
        showModal={showModal}
      />
      {modal && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          similarPhotos={selectedPhoto.similar_photos}
          closeModal={closeModal}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          isFavPhotoExist={favorites.length > 0}
        />
      )}
    </div>
  );
};

export default App;
