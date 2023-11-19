/*
    Reducer (slice) и Thunk для работы с API логинизации
*/
import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, refreshUserDataThunk, signupThunk } from "dal/requestUserAuth";


//slice
const INITIAL_STATE = {
    isLoading: false,
    error: null,
    authenticated: false, //признак наличия авторизации пользователя
    token: null,
    user: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    extraReducers: builder => builder
    // thunk для sign up
    .addCase(signupThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
    })
    .addCase(signupThunk.fulfilled, (state, action) => {
        
        console.info('### signup fullfiled action', action)
        state.isLoading = false;
        state.error = null;
        state.authenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
    })
    .addCase(signupThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    })
    // thunk для log in
    .addCase(loginThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
    })
    .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.authenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
    })
    .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    })
    // thunk для log out
    .addCase(logoutThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
    })
    .addCase(logoutThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.authenticated = false;
        state.token = null;
        state.user = null;
    })
    .addCase(logoutThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    })
    // thunk для REFRESH USER DATA
    .addCase(refreshUserDataThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
    })
    .addCase(refreshUserDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.authenticated = true;
        state.user = action.payload;
    })
    .addCase(refreshUserDataThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    })
})

export const authReducer = authSlice.reducer;