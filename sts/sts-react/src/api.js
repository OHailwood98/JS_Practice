import axios from 'axios'

const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }
};

export default {
    user:{
        login: (credentials) => axios.post("/api/auth", {credentials}).then(res => res.data.user),
        addItem: (credentials) => axios.post("/api/products/add", {credentials}).then(res => res.data.user),
        addPicture: (credentials) => axios.post("/api/products/addpic", credentials, config).then(res => res.data.user)
    }
}