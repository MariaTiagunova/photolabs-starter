import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
    const handleTopicClick = (topicId) => {
        // Call the onTopicClick callback when a topic is clicked
        if (props.onTopicClick) {
            props.onTopicClick(topicId);
        }
    };

    return (
        <div className="top-nav-bar">
            <span className="top-nav-bar__logo">PhotoLabs</span>
            <TopicList topics={props.topics} onTopicClick={handleTopicClick} />
            <FavBadge isFavPhotoExist={props.isFavPhotoExist} handleShowFavorites={props.handleShowFavorites} />
        </div>
    );
}

export default TopNavigation;