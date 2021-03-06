import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "../auth/authSlice"
import contactReducer from "../contacts/contacts-reducer"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from "redux-persist/lib/storage";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER,
      ],
    },
  }),
];

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
}

const store = configureStore({
    reducer:
    {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactReducer
    },
    middleware,
  devTools: process.env.NODE_ENV === 'development',
})

const persistor = persistStore(store)
 
export  {store, persistor}

