import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './features/auth/authSlice';
import shipmentReducer from './features/ship/shipmentSlice';
import {loginApi} from './features/auth/authApi';
import {shipmentApi} from './features/ship/shipmentApi';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    shipment: shipmentReducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [shipmentApi.reducerPath]: shipmentApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(loginApi.middleware, shipmentApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
