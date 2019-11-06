import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token';
const userNameKey = 'username';

export function getToken() {
  return Cookies.get(TokenKey)

}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setUsername(username) {
  return Cookies.set(userNameKey,username);
}

export function getUsername() {
  return Cookies.get(userNameKey);
}

export function removeUser() {
  return Cookies.remove(userNameKey);
}
