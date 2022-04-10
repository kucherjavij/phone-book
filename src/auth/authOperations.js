import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

const token = {
    set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
      axios.defaults.headers.common.Authorization = '';
    },
  };

const register = createAsyncThunk('auth/register', async (credentials) => {
    const {data} = await axios.post(`/users/signup`, credentials);
    token.set(data.token)
    return data
})

const logIn = createAsyncThunk('auth/login', async (credentials) => {
  console.log(credentials);
    const {data} = await axios.post(`/users/login`, credentials);
    token.set(data.token)

    return data
})

const logOut = createAsyncThunk('auth/logout', async () => {
  await axios.post(`/users/logout`);
    token.unset()
    
})

const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
  const state = thunkApi.getState();
  const persistedToken = state.auth.token;
  if (persistedToken === null) {
    return thunkApi.rejectWithValue();
  }
token.set(persistedToken)
  
  const {data} = await axios.get(`/users/current`)
  return data
})

const operations = {
    register,
    logIn,
  logOut,
    fetchCurrentUser
}
export default operations