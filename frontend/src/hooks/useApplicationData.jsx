import { useReducer } from 'react';

// Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const updatedFavorites = state.favorites.includes(action.payload)
        ? state.favorites.filter((id) => id !== action.payload)
        : [...state.favorites, action.payload];
      return { ...state, favorites: updatedFavorites };

    case 'SHOW_MODAL':
      return { ...state, modal: action.payload };

    case 'CLOSE_MODAL':
      return { ...state, modal: null };

    default:
      return state;
  }
};

const useApplicationData = () => {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, {
    favorites: [],
    modal: null,
  });

  // Define actions
  const toggleFavorite = (photoId) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: photoId });
  };

  const showModal = (photoId) => {
    dispatch({ type: 'SHOW_MODAL', payload: photoId });
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return {
    state,
    toggleFavorite,
    showModal,
    closeModal,
  };
};

export default useApplicationData;