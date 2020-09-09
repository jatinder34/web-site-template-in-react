import axios from "axios";

// Register
const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password
  });
};

// Login 
const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password
    })
    .then(response => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

// Logout
const logout = () => {
  localStorage.removeItem("user");
};

// Get Current Logged in User
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser
};