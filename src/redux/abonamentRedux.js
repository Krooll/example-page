//config
export const API_URL = process.env.NODE_ENV === 'production' ?  '/api' : 'http://localhost:3131/api';

//selectors
export const getAllAbonaments = (state) => state.abonament;

// actions
const createActionName = actionName => `app/abonament/${actionName}`;
const UPDATE_ABONAMENT = createActionName('UPDATE_ABONAMENT');

// action creators
export const updatedAbonament = payload => ({type: UPDATE_ABONAMENT, payload});

export const fetchAbonament = () => {
  return (dispatch) => {
      fetch(API_URL + '/abonament')
        .then(res => res.json())
        .then(data => {
            dispatch(updatedAbonament(data));
        })
        .catch((error) => {
            console.error(error);
        })
  };
};

const abonamentReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_ABONAMENT:
      return [...action.payload]; 
    default:
      return statePart;
  };
};

export default abonamentReducer;