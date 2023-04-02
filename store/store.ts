import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { cartSlice } from './features/cartSlice';
import { userProfileSlice } from './features/userProfileSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    currentUser: userProfileSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
