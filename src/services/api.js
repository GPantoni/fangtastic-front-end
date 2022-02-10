import axios from "axios";

const BASE_URL = "http://localhost:5000";

async function signUp(user) {
  await axios.post(`${BASE_URL}/sign-up`, user);
}

const api = { signUp };

export default api;
