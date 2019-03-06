import axios from 'axios'

export default {
    user:{
        login: (credentials) => axios.post("/api/auth", {credentials}).then(res => res.data.user),
        signup: (credentials) => axios.post("/api/signup", {credentials}).then(res => res.data.user),
        confirm:(eToken) => axios.post("/api/confirm", {eToken}).then(res =>res.data.user),
        forgotPassword:(email) => axios.post("/api/forgot", {email}).then(res =>res.data.user),
        ResetPassword:(data) => axios.post("/api/reset", {data}).then(res =>res.data.user),
        ValidateResetToken:(token) => axios.post("/api/validate", {token}).then(res =>res.data.user),
        UpdatePassword:(data) => axios.post("/api/updatepassword", {data}).then(res =>res.data.user),
    }
}