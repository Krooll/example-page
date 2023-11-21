import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from './intitialState';
import productsReducer from './productsRedux';
import optionsReducer from './optionRedux';
import mailsReducer from './mailsRedux';
import storeCartReducer from './storeCartRedux';
import orderReducer from './orderRedux';
import imagesReducer from './imageRedux';
import abonamentReducer from './abonamentRedux';

const subreducers = {
    products: productsReducer,
    options: optionsReducer,
    mails: mailsReducer,
    storeCart: storeCartReducer,
    orders: orderReducer,
    images: imagesReducer,
    abonament: abonamentReducer
}

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,

  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;