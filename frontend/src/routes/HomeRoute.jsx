import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
    const handleTopicClick = (topicId) => {
        // Call the fetchPhotosByTopic function when a topic is clicked
        props.fetchPhotosByTopic(topicId);
    };
  return (
    <div className="home-route">
      <TopNavigation topics = {props.topics} isFavPhotoExist={props.isFavPhotoExist} onTopicClick={handleTopicClick}/>
      <PhotoList photos =  {props.photos} favorites={props.favorites} toggleFavorite={props.toggleFavorite} showModal={props.showModal}/>
    </div>
  );
};

export default HomeRoute;
