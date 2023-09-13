import React from 'react';

// import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';

import topics from 'mocks/topics';
import photos from 'mocks/photos';

// const photos = new Array(3).fill(sampleDataForPhotoListItem);
// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <HomeRoute topics = {topics} photos = {photos}/>
      
    </div>
  );
};

export default App;
