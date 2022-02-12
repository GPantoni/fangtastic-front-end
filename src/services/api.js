import axios from "axios";

const BASE_URL = 'http://localhost:5000'

function addToCart(id) {
    console.log(id)
}

function getCart() {
    //se tem token, pegar pelo token

    //senão, pegar pelo localstorage (nesse cason, nenhuma req é feita)
}

function getProductsById(ids) {
    const promise = axios.get(`${BASE_URL}/cart/products`, {headers: {
        IDS: ids
    } })
    return promise;
}

async function signUp(user) {
    await axios.post(`${BASE_URL}/sign-up`, user);
  }
  

const api = {
    signUp, addToCart, getCart, getProductsById
}

export default api;
