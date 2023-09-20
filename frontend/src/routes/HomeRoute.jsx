import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import FavoritePhotos from "../components/FavoritePhotos";

const HomeRoute = ({ topics, isFavPhotoExist, photos, favorites, toggleFavorite, showModal, fetchPhotosByTopic, favoritePhotos, handleShowFavorites, showFavorites }) => {
    // Function to handle topic clicks
    const handleTopicClick = (topicId) => {
        // Call the fetchPhotosByTopic function when a topic is clicked
        fetchPhotosByTopic(topicId);
    };

    return (
        <div className="home-route">
            {/* Render the TopNavigation and PhotoList components */}
            <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist} onTopicClick={handleTopicClick} handleShowFavorites={handleShowFavorites} favoritePhotos={favoritePhotos} showFavorites={showFavorites} />
            {/* Conditionally render either PhotoList or FavoritePhotos */}
            {showFavorites ? (
                <FavoritePhotos photos={favoritePhotos} favorites={favorites} toggleFavorite={toggleFavorite} showModal={showModal} showFavorites={showFavorites} favoritePhotos={favoritePhotos} />
            ) : (
                <PhotoList photos={photos} favorites={favorites} toggleFavorite={toggleFavorite} showModal={showModal} showFavorites={showFavorites} />
            )}
        </div>
    );
};

export default HomeRoute;
