import axios from "axios";

const BASE_URL = "http://localhost:5000";

async function signUp(user) {
  await axios.post(`${BASE_URL}/sign-up`, user);
}

async function signIn(data) {
  const token = await axios.post(`${BASE_URL}/sign-in`, data);
  return token;
}

const api = { signUp, signIn };

export default api;
