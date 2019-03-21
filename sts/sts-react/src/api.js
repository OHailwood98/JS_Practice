import axios from 'axios'

const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }
};

export default {
    user:{
        login: (credentials) => axios.post("/api/auth", {credentials}).then(res => res.data.user),
        
    },
    product:{
        addItem: (credentials) => axios.post("/api/products/add", {credentials}),
        addPicture: (credentials) => axios.post("/api/products/addpic", credentials, config),
        getProducts: () => axios.get("/api/products").then(res => res.data.products),
        reduceStock: (product) => axios.post("/api/products/reduce", product).then(res => res.data.stock)
    }
}