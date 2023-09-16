import { useState } from 'react';

// Define custom hook
export const useApplicationData = () => {
  // Define state variables
  const [favorites, setFavorites] = useState([]);
  const [modal, setModal] = useState(null);

  // State-modifying functions 
  const toggleFavorite = (photoId) => {
    if (favorites.includes(photoId)) {
      setFavorites(favorites.filter((id) => id !== photoId));
    } else {
      setFavorites([...favorites, photoId]);
    }
  };

  const showModal = (photoId) => {
    setModal(photoId);
  };

  const closeModal = () => {
    setModal(null);
  };

  // Return the state and actions
  return {
    favorites,
    modal,
    toggleFavorite,
    showModal,
    closeModal,
  };
};