//config
export const API_URL = process.env.NODE_ENV === 'production' ?  '/api' : 'http://localhost:3131/api';

//selectors
export const getAllOptions = (state) => state.options;

// actions
const createActionName = actionName => `app/products/${actionName}`;
const UPDATE_OPTIONS = createActionName('UPDATE_OPTIONS')


// action creators
export const updatedOptions = payload => ({type: UPDATE_OPTIONS, payload});

export const fetchOptions = () => {
  return (dispatch) => {
      fetch(API_URL + '/options')
        .then(res => res.json())
        .then(options => {
            dispatch(updatedOptions(options));
        })
        .catch((error) => {
            console.error(error);
        })
  };
};

const optionsReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_OPTIONS:
      return [...action.payload]; 
    default:
      return statePart;
  };
};

export default optionsReducer;