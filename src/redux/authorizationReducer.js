/*
    Reducer (slice) и Thunk для работы с API логинизации
*/
import { createSlice, isAnyOf } from "@reduxjs/toolkit";
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
        .addCase(signupThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.authenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
        })
        .addCase(loginThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.authenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
        })
        .addCase(logoutThunk.fulfilled, (state, action) => {
            return INITIAL_STATE; //полностью переписывает стейт на начальный
            // state.isLoading = false;
            // state.error = null;
            // state.authenticated = false;
            // state.token = null;
            // state.user = null;
        })
        .addCase(refreshUserDataThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.authenticated = true;
            state.user = action.payload;
        })

        .addMatcher(isAnyOf(
            loginThunk.pending,
            logoutThunk.pending,
            signupThunk.pending,
            refreshUserDataThunk.pending
        ), (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addMatcher(isAnyOf(
            loginThunk.rejected,
            logoutThunk.rejected,
            signupThunk.rejected,
            refreshUserDataThunk.rejected
        ), (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
})

export const authReducer = authSlice.reducer;