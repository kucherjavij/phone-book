import { createSlice } from "@reduxjs/toolkit";
import operations from "./authOperations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
  };
const authSlice = createSlice({
name: 'auth',
initialState,
extraReducers:{
[operations.register.fulfilled](state,{payload}){
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
},
[operations.logIn.fulfilled](state,{payload}){
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
    },
[operations.logOut.fulfilled](state,_){
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
    },
[operations.fetchCurrentUser.fulfilled](state,{payload}){
    state.user = payload;
    state.isLoggedIn = true;
}
}
})

export default authSlice.reducer;