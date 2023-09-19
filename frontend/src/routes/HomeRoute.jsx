import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({ topics, isFavPhotoExist, photos, favorites, toggleFavorite, showModal, fetchPhotosByTopic }) => {
    // Function to handle topic clicks
    const handleTopicClick = (topicId) => {
        // Call the fetchPhotosByTopic function when a topic is clicked
        fetchPhotosByTopic(topicId);
    };

    return (
        <div className="home-route">
            {/* Render the TopNavigation and PhotoList components */}
            <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist} onTopicClick={handleTopicClick} />
            <PhotoList photos={photos} favorites={favorites} toggleFavorite={toggleFavorite} showModal={showModal} />
        </div>
    );
};

export default HomeRoute;
