import axios from 'axios';

const BASE_URL = "https://back-fangtastic.herokuapp.com";

async function signUp(user) {
  await axios.post(`${BASE_URL}/sign-up`, user);
}

async function signIn(data) {
  const token = await axios.post(`${BASE_URL}/sign-in`, data);
  return token;
}

function addToCart(id) {
  console.log(id);
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

function addFormOfPayment(data, token) {
  const promise = axios.post(`${BASE_URL}/checkout`, data, {
    headers: { token },
  });
  return promise;
}

function getFormsOfPaymentData(token) {
  const promise = axios.get(`${BASE_URL}/checkout`, { headers: { token } });
  return promise;
}

function sendOrder(data, token) {
  const promise = axios.post(`${BASE_URL}/order`, data, { headers: { token } });
  return promise;
}

const api = {
  signUp,
  signIn,
  addToCart,
  getCart,
  getProductsById,
  addFormOfPayment,
  getFormsOfPaymentData,
  sendOrder
};

export default api;
