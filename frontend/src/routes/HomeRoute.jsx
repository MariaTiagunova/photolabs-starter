import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation topics = {props.topics} isFavPhotoExist={props.isFavPhotoExist}/>
      <PhotoList photos =  {props.photos} favorites={props.favorites} toggleFavorite={props.toggleFavorite}/>
    </div>
  );
};

export default HomeRoute;
