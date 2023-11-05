//config
export const API_URL = process.env.NODE_ENV === 'production' ?  '/api' : 'http://localhost:3131/api';

//selectors


// actions
const createActionName = actionName => `app/posts/${actionName}`;


// action creators


/*export const fetchPosts = () => {
  return (dispatch) => {
      fetch(API_URL + '/posts')
        .then(res => res.json())
        .then(posts => {
            dispatch(updatePosts(posts));
        })
        .catch((error) => {
            console.error(error);
        })
  };
};*/

const productsReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default productsReducer;