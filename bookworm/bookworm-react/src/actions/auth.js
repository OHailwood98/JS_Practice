import {USER_LOGGED_IN} from "../types"
import {USER_LOGGED_OUT} from "../types"
import api from "../api"


export const userLoggedIn = user => ({
    type: USER_LOGGED_IN,
    user
})

export const login = (credentials) => (dispatch) => api.user.login(credentials).then(user => {
    localStorage.bookwormToken = user.token;
    dispatch(userLoggedIn(user))
});

export const userLoggedOut = () =>({
    type: USER_LOGGED_OUT
})

export const logout = () => (dispatch) =>{
    localStorage.removeItem('bookwormToken');
    dispatch(userLoggedOut())
}

export const signup = (credentials) => (dispatch) => api.user.signup(credentials).then(user => {
    localStorage.bookwormToken = user.token;
    dispatch(userLoggedIn(user))
});

export const confirm = (eToken) => (dispatch) => api.user.confirm(eToken).then(user => {
    dispatch(userLoggedOut())
    localStorage.bookwormToken = user.token;
    dispatch(userLoggedIn(user))
});

export const ForgotPassword = (token) => () => api.user.forgotPassword(token).then(user => {
    console.dir(user);
});

export const ResetPassword = (data) => (dispatch) => api.user.ResetPassword(data).then(user => {
    dispatch(userLoggedIn(user))
    console.dir(user);
});

export const UpdatePassword = (data) => (dispatch) => api.user.UpdatePassword(data).then(user => {
    dispatch(userLoggedIn(user))
    console.dir(user);
});

export const ValidateResetToken = (token) => () => api.user.ValidateResetToken(token).then(user => {
    //console.dir(user);
});