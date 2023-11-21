/*
    API для книги контактов с авторизацией - документация https://connections-api.herokuapp.com/docs/#/
*/

import axios from "axios"

const BASE_URL = 'https://connections-api.herokuapp.com'


const api = axios.create({
    baseURL: BASE_URL,
})

// запись в инстанс заголовка с токеном авторизации
export const setToken = (token) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
}

//action - "contacts/fetchAll"
export const getAllContacts = async () => {
    const result = await api.get('/contacts');
    return result.data;
}
//action - "contacts/addContact"
export const addContact = async (newContact) => {
    return await api.post('/contacts', newContact);
}
//action - "contacts/deleteContact"
export const deleteContact  = async (contactId) => {
    return await api.delete(`/contacts/${contactId}`);
}
//action - "contacts/editContact"
export const editContact  = async (contactId, contactData) => {
    return await api.delete(`/contacts/${contactId}`, contactData);
}

// авторизация и регистрация
export const signUp = async data => {
    const result = await api.post('/users/signup', data);
    setToken(result.token); // сразу в инстанс записываем токен, последующие запросы автоматически будут с токеном
    return result;
}
export const logIn = async data => {
    const result = await api.post('/users/login', data);
    setToken(result.data.token);
    return result;
}
export const logOut = async () => {
    const result = await api.post('/users/logout');
    return result;
}
export const userInfo = async (cachedToken) => {
    setToken(cachedToken);
    const result = await api.get('/users/current');
    return result;
}
