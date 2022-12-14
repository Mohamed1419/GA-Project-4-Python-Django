function setToken(token) {
  if (token) {
    localStorage.setItem("token", token);
  } else {
    localStorage.removeItem("token");
  }
}

function getToken() {
  let token = localStorage.getItem("token");

  if (token) {
    const payload = JSON.parse(atob(token.split(".")[1]));
    if (payload.exp < Date.now() / 1000) {
      localStorage.removeItem("token");
      token = null;
    }
  }
  return token;
}

function getUserFromToken() {
  const token = getToken();
  let user = token ? JSON.parse(atob(token.split(".")[1])) : null;
  return user;
}

function removeToken() {
  localStorage.removeItem("token");
}

const exports = {
  setToken,
  getToken,
  removeToken,
  getUserFromToken,
};

export default exports;
