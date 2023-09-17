import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData'; // Import the hook

const App = () => {
  // Call the useApplicationData hook to get the state and actions
  const {
    state,
    toggleFavorite,
    showModal,
    closeModal,
  } = useApplicationData();

  // Extract the state values from the state object
  const { favorites, modal } = state;

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
