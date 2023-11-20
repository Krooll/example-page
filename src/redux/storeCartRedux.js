//config
export const API_URL = process.env.NODE_ENV === 'production' ?  '/api' : 'http://localhost:3232/api';

//selectors
export const getAllOrders = (state) => state.storeCart;
export const getOrderById = ({storeCart}, id) => storeCart.find(item => item.id === id);
export const getTotalPriceSum = (state) => {
  const allOrders = state.storeCart;
  return allOrders.reduce((sum, order) => sum + order.totalPrice, 0);
};

// actions
const createActionName = actionName => `app/storeCart/${actionName}`;
const ADD_ORDER = createActionName('ADD_ORDER');
const DELETE_ORDER = createActionName('DELETE_ORDER');
const ADD_QUANTITY = createActionName('ADD_QUANTITY');
const REMOVE_QUANTITY = createActionName('REMOVE_QUANTITY');
const UPDATE_PLUS_PRICE = createActionName('UPDATE_PLUS_PRICE');

// action creators
export const addActiveOrder = payload => ({type: ADD_ORDER, payload});
export const deleteActiveOrder = payload => ({type: DELETE_ORDER, payload});
export const addQuantity = payload => ({type: ADD_QUANTITY, payload});
export const removeQuantity = payload => ({type: REMOVE_QUANTITY, payload});
export const updatePlusPrice = payload => ({type: UPDATE_PLUS_PRICE, payload});

const storeCartReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_ORDER:
      return [...statePart, {...action.payload}]; 
    case DELETE_ORDER:
      return statePart.filter(item => item.id !== action.payload); 
    case ADD_QUANTITY:
      return statePart.map(item =>item.id === action.payload.id ? { ...item, pieces: item.pieces + 1 } : item);
    case REMOVE_QUANTITY:
      return statePart.map(item =>item.id === action.payload.id ? { ...item, pieces: item.pieces - 1 } : item);
    case UPDATE_PLUS_PRICE:
      return statePart.map(item =>item.id === action.payload.id ? { ...item, totalPrice: item.price * item.pieces} : item);
    default:
      return statePart;
  };
};

export default storeCartReducer;