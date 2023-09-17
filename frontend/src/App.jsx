import './App.scss';
import HomeRoute from 'routes/HomeRoute';
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

 const topics = [];
  // Extract the state values from the state object
  const { favorites, modal } = state;
  const photos = state.photoData;
  const selectedPhotoId = modal;
  const selectedPhoto = photos.find((photo) => photo.id === selectedPhotoId);

  return (
    <div className="App">
      <HomeRoute
        topics={state.topicData}
        photos={state.photoData}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        isFavPhotoExist={favorites.length > 0}
        showModal={showModal}
      />
      {modal && selectedPhoto && (
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
