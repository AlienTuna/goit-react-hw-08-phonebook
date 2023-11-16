import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logIn, signUp } from "authorizationService/authorizationService";

export const loginThunk = createAsyncThunk(
    'auth/login',
    async(data, thunkAPI) => {
        try {
            const result = await logIn(data);
            return result;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);
export const sugnupThunk = createAsyncThunk(
    'auth/signup',
    async(data, thunkAPI) => {
        try {
            const result = await signUp(data);
            return result;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);

//slice
const INITIAL_STATE = {
    status: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    extraReducers: builder => builder
})
