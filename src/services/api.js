import axios from "axios";

const BASE_URL = "https://back-fangtastic.herokuapp.com";

function addToCart(id) {
  console.log(id);
}

async function signIn(data) {
  const token = await axios.post(`${BASE_URL}/sign-in`, data);
  return token;
}

function getCart() {
  //se tem token, pegar pelo token
  //senão, pegar pelo localstorage (nesse cason, nenhuma req é feita)
}

function getProductsById(ids) {
  const promise = axios.get(`${BASE_URL}/cart/products`, {
    headers: {
      IDS: ids,
    },
  });
  return promise;
}

async function signUp(user) {
  await axios.post(`${BASE_URL}/sign-up`, user);
}

const api = {
  signUp,
  signIn,
  addToCart,
  getCart,
  getProductsById,
};

export default api;
