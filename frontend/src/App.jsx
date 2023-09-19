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
      fetchPhotosByTopic
  } = useApplicationData();

  // Extract the state values from the state object
    const { favorites, modal, topicData, photoData } = state;
    const selectedPhotoId = modal;
    const selectedPhoto = photoData.find((photo) => photo.id === selectedPhotoId);

  return (
    <div className="App">
      <HomeRoute
        topics={state.topicData}
        photos={state.photoData}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        isFavPhotoExist={favorites.length > 0}
        showModal={showModal}
        fetchPhotosByTopic = {fetchPhotosByTopic}
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
