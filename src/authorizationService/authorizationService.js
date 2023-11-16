// https://connections-api.herokuapp.com/docs/#/User/post_users_login
const { default: axios } = require("axios");

const authInstance = axios.create({
    baseURL: 'https://653d34eff52310ee6a99fe47.mockapi.io/',
})

export const signUp = async data => {
    const {result} = await authInstance.post('users/signup', data);
    return result;
}
export const logIn = async data => {
    const {result} = await authInstance.post('users/login', data);
    return result;
}
export const logOut = async data => {
    const {result} = await authInstance.post('users/logout', data);
    return result;
}
export const userInfo = async data => {
    const {result} = await authInstance.get('users/current', data);
    return result;
}