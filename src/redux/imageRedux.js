//config
export const API_URL = process.env.NODE_ENV === 'production' ?  '/api' : 'http://localhost:3232/api';

//selectors
export const getAllImages = (state) => state.images;

// actions
const createActionName = actionName => `app/images/${actionName}`;
const UPDATE_IMAGES = createActionName('UPDATE_IMAGES');

// action creators
export const updatedImages = payload => ({type: UPDATE_IMAGES, payload});

export const fetchImages = () => {
  return (dispatch) => {
      fetch(API_URL + '/images')
        .then(res => res.json())
        .then(images => {
            dispatch(updatedImages(images));
        })
        .catch((error) => {
            console.error(error);
        })
  };
};

const imagesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_IMAGES:
      return [...action.payload]; 
    default:
      return statePart;
  };
};

export default imagesReducer;