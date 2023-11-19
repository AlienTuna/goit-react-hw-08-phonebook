/*
    Thunk для работы с API авторизации
*/
import { createAsyncThunk } from "@reduxjs/toolkit";
import { logIn, logOut, setToken, signUp, userInfo } from "services/contactsAPI";


export const loginThunk = createAsyncThunk(
    'auth/login',
    async (formData, thunkAPI) => {
        try {
            const result = await logIn(formData);
            return result.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);
export const signupThunk = createAsyncThunk(
    'auth/signup',
    async (data, thunkAPI) => {
        try {
            const result = await signUp(data);
            return result.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);
export const logoutThunk = createAsyncThunk(
    'auth/logout',
    async (data, thunkAPI) => {
        try {
            const result = await logOut();
            return result;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);
export const refreshUserDataThunk = createAsyncThunk(
    'auth/refreshUserData',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState(); // получаем стейт для того, чтобы достать оттуда токен юзера
        const token = state.auth.token;

        try {
            setToken(token)
            const result = await userInfo();
            return result;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    },
    { // условие для запуска thunk
        condition: (_, thunkAPI) => {
            const state = thunkAPI.getState();
            const token = state.auth.token;
            if (!token) return false;
            return true;
        },
    },
);