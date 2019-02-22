import axios from 'axios'

export default {
    user:{
        login: (credentials) => axios.post("/api/auth", {credentials}).then(res => res.data.user),
        signup: (credentials) => axios.post("/api/signup", {credentials}).then(res => res.data.user),
        confirm:(eToken) => axios.post("/api/confirm", {eToken}).then(res => res.data.user)
    }
}