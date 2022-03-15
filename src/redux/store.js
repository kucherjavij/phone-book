import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/authSlice"
import contactReducer from "../contacts/contacts-reducer"


const store = configureStore({
    reducer:
        {
        auth: authReducer,
        contacts: contactReducer
    } 
})

export default store;

