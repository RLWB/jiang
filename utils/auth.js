/*
 * @Author: Kuntey
 * @Date: 2022-04-09 10:54:59
 * @LastEditors: Kuntey
 * @LastEditTime: 2022-04-09 10:54:59
 * @Description:
 */
import Cookies from 'js-cookie';

const TokenKey = 'Admin-Token';

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}
