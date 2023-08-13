import { configureStore } from '@reduxjs/toolkit';

import signUpReducer from '../slices/userSignupSlice';
import signInReducer from '../slices/userSigninSlice';

export const store = configureStore({
  reducer: {
    signup: signUpReducer, // Use lowercase 'signup' here
    signin: signInReducer, // Use lowercase 'signin' here
  },
});
