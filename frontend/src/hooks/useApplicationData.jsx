import React, { useReducer, useEffect } from 'react';

// Define action types
const ACTIONS = {
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  SHOW_MODAL: 'SHOW_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
};

// Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_FAVORITE:
      // Toggle favorites for a photo
      const updatedFavorites = state.favorites.includes(action.payload)
          ? state.favorites.filter((id) => id !== action.payload)
          : [...state.favorites, action.payload];
      return { ...state, favorites: updatedFavorites };

    case ACTIONS.SHOW_MODAL:
      // Show a modal with the specified photo ID
      return { ...state, modal: action.payload };

    case ACTIONS.CLOSE_MODAL:
      // Close the modal
      return { ...state, modal: null };

    case ACTIONS.SET_PHOTO_DATA:
      // Set the photo data in the state
      return { ...state, photoData: action.payload };

    case ACTIONS.SET_TOPIC_DATA:
      // Set the topic data in the state
      return { ...state, topicData: action.payload };

    default:
      return state;
  }
};

const useApplicationData = () => {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, {
    favorites: [],
    modal: null,
    photoData: [],
    topicData: [],
    topicId: null,
  });

  // Define actions
  const toggleFavorite = (photoId) => {
    // Toggle the favorite status of a photo
    dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: photoId });
  };

  const showModal = (photoId) => {
    // Show the modal with the specific photo
    dispatch({ type: ACTIONS.SHOW_MODAL, payload: photoId });
  };

  const closeModal = () => {
    // Close the modal
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  useEffect(() => {
    // Fetch initial photo data when the component mounts
    fetch("/api/photos")
        .then((response) => response.json())
        .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
  }, []); // Empty dependency array means this effect runs once on mount

  useEffect(() => {
    // Fetch initial topic data when the component mounts
    fetch("/api/topics")
        .then((response) => response.json())
        .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }));
  }, []); // Empty dependency array means this effect runs once on mount

  const fetchPhotosByTopic = (topicId) => {
    // Fetch photos for a specific topic
    fetch(`/api/topics/photos/${topicId}`)
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
        }, []);
  };

  return {
    state,
    toggleFavorite,
    showModal,
    closeModal,
    fetchPhotosByTopic
  };
};

export default useApplicationData;