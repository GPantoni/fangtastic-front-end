import axios from "axios";

const BASE_URL = 'http://localhost:5000/products'

function addToCart(id) {
    console.log(id)
}

function getCart() {
    //se tem token, pegar pelo token

    //senão, pegar pelo localstorage (nesse cason, nenhuma req é feita)
}

function getProductsById(ids) {
    axios.get(`${BASE_URL}/cart/products`, {params: ids })
}

const api = {
    addToCart, getCart, getProductsById
}

export default api;