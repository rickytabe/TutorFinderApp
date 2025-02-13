import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './AuthSlice'; // Example auth reducer

const rootReducer = combineReducers({
  auth: authReducer, // Add other reducers here
});

export default rootReducer;