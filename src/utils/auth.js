import Cookies from "js-cookie";

const TokenKey = "hbut_keyan_token";
const UserKey = "hbut_keyan_user"

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token, user) {
  Cookies.set(UserKey, JSON.stringify(user));
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  Cookies.remove(UserKey)
  return Cookies.remove(TokenKey);
}

export function getUser() {
  return JSON.parse(Cookies.get(UserKey));
}