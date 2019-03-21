import {USER_LOGGED_IN} from "../types"
import {USER_LOGGED_OUT} from "../types"
import api from "../api"
import setAuthHeader from '../utils/setAuthHeader'


export const userLoggedIn = user => ({
    type: USER_LOGGED_IN,
    user
})

export const login = (credentials) => (dispatch) => api.user.login(credentials).then(user => {
    localStorage.stsToken = user.token;
    dispatch(userLoggedIn(user))
    setAuthHeader(user.token);
});

export const userLoggedOut = () =>({
    type: USER_LOGGED_OUT
})

export const logout = () => (dispatch) =>{
    localStorage.removeItem('bookwormToken');
    dispatch(userLoggedOut())
    setAuthHeader();
}
