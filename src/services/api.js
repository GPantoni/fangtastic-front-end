import axios from "axios";

//const BASE_URL = "https://back-fangtastic.herokuapp.com";
const BASE_URL = "http://localhost:5001"

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
  axios.post(`${BASE_URL}/checkout`, data, {headers: { token }})

}


const api = {
  signUp,
  signIn,
  addToCart,
  getCart,
  getProductsById,
  addFormOfPayment
};

export default api;
