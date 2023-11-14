//config
export const API_URL = process.env.NODE_ENV === 'production' ?  '/api' : 'http://localhost:3131/api';

//selectors
export const getAllOrders = (state) => state.storeCart;
export const getOrderById = ({storeCart}, id) => storeCart.find(item => item.id === id);

// actions
const createActionName = actionName => `app/storeCart/${actionName}`;
const UPDATE_ORDERS = createActionName('UPDATE_ORDERS');
const ADD_ORDER = createActionName('ADD_ORDER');
const DELETE_ORDER = createActionName('DELETE_ORDER');

// action creators
export const upDateOrders = payload => ({type: UPDATE_ORDERS, payload});
export const addActiveOrder = payload => ({type: ADD_ORDER, payload});
export const deleteActiveOrder = payload => ({type: DELETE_ORDER, payload});

const storeCartReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_ORDER:
      return [...statePart, {...action.payload}]; 
    case DELETE_ORDER:
      return statePart.filter(item => item.id !== action.payload); 
    case UPDATE_ORDERS:
      return [...action.payload]; 
    default:
      return statePart;
  };
};

export default storeCartReducer;