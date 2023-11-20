//config
export const API_URL = process.env.NODE_ENV === 'production' ?  '/api' : 'http://localhost:3131/api';

//selectors
export const getAllOrders = (state) => state.orders;

// actions
const createActionName = actionName => `app/orders/${actionName}`;
const SEND_ORDER = createActionName('SEND_ORDER');


// action creators
export const sendOrder = payload => ({type: SEND_ORDER, payload});

export const sendOrderRequest = (orderData) => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    } 
    fetch(API_URL + '/orders/', options)
            .then(() => {
              dispatch(sendOrder(orderData));
            })
            .catch((error) => {
              console.error(error);
            });
  }
};

const orderReducer = (statePart = [], action) => {
  switch (action.type) {
    case SEND_ORDER:
      return [...action.payload]; 
    default:
      return statePart;
  };
};

export default orderReducer;