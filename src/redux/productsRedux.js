//config
export const API_URL = process.env.NODE_ENV === 'production' ?  '/api' : 'http://localhost:3131/api';

//selectors
export const getAllProducts = (state) => state.products;
export const getProductById = ({products}, id) => products.find(product => product.id === id);

// actions
const createActionName = actionName => `app/products/${actionName}`;
const UPDATE_PRODUCTS = createActionName('UPDATE_PRODUCTS')


// action creators
export const upDatedProducts = payload => ({type: UPDATE_PRODUCTS, payload});

export const fetchProducts = () => {
  return (dispatch) => {
      fetch(API_URL + '/products')
        .then(res => res.json())
        .then(products => {
            dispatch(upDatedProducts(products));
        })
        .catch((error) => {
            console.error(error);
        })
  };
};

const productsReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return [...action.payload]; 
    default:
      return statePart;
  };
};

export default productsReducer;