//config
export const API_URL = process.env.NODE_ENV === 'production' ?  '/api' : 'http://localhost:3131/api';

//selectors
export const getAllOrders = (state) => state.storeCart;

// actions
const createActionName = actionName => `app/products/${actionName}`;
const UPDATE_ORDERS = createActionName('UPDATE_ORDERS');
const ADD_ORDER = createActionName('ADD_ORDER');

// action creators
export const upDateOrders = payload => ({type: UPDATE_ORDERS, payload});
export const addOrder = payload => ({type: ADD_ORDER, payload});

export const fetchOrders = () => {
  return (dispatch) => {
      fetch(API_URL + '/storeCart')
        .then(res => res.json())
        .then(orders => {
            dispatch(upDateOrders(orders));
        })
        .catch((error) => {
            console.error(error);
        })
  };
};

export const addOrderRequest = (orderData) => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    } 
    fetch(API_URL + '/storeCart/', options)
            .then(() => {
              dispatch(addOrder(orderData));
            })
            .catch((error) => {
              console.error(error);
            });
  }
};


const storeCartReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_ORDER:
      return [...action.payload]; 
    case UPDATE_ORDERS:
      return [...action.payload]; 
    default:
      return statePart;
  };
};

export default storeCartReducer;