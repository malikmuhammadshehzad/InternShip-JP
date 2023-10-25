import {combineReducers, configureStore} from '@reduxjs/toolkit';
import ProductReducer from './reducers/ProductReducer';
const reducers = combineReducers({
  product: ProductReducer,
});

export const store = configureStore({
  reducer: reducers,
});
