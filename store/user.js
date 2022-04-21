/*
 * @Author: Kuntey
 * @Date: 2021-09-03 13:56:16
 * @LastEditors: Kuntey
 * @LastEditTime: 2022-04-09 14:48:22
 * @Description:
 */
import { loginByPasswrod, loginByVerificationCode, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
// import Cookies from 'js-cookie'

export const state = () => ({
    token: getToken(),
    name: '',
    avatar: '',
    roles: [],
    permissions: []
});

export const  mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles
    },
    SET_PERMISSIONS: (state, permissions) => {
        state.permissions = permissions
    }
}

export const actions = {
    // 验证码登录
    codeLogin({ commit }, userInfo) {
        return new Promise((resolve, reject) => {
            loginByVerificationCode(userInfo).then(res => {
                setToken(res.token)
                commit('SET_TOKEN', res.token)
                //   Cookies.set("roleName",res.roleName);
                // localStorage.setItem("roleName",res.roleName)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    // 密码登录
    Login({ commit }, userInfo) {
        return new Promise((resolve, reject) => {
            loginByPasswrod(userInfo).then(res => {
                setToken(res.token)
                commit('SET_TOKEN', res.token)
            //   Cookies.set("roleName",res.roleName);
            // localStorage.setItem("roleName",res.roleName)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
        return new Promise((resolve, reject) => {
            getInfo(state.token).then(res => {
                const user = res.user
                const avatar = user.avatar == "" ? require("@/assets/images/default-avatar.png") : process.env.VUE_APP_BASE_API + user.avatar;
                if (res.roles && res.roles.length > 0) { // 验证返回的roles是否是一个非空数组
                    commit('SET_ROLES', res.roles)
                    commit('SET_PERMISSIONS', res.permissions)
                } else {
                    commit('SET_ROLES', ['ROLE_DEFAULT'])
                }
                commit('SET_NAME', user.userName)
                commit('SET_AVATAR', avatar)
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    },

    // 退出系统
    LogOut({ commit, state }) {
        return new Promise((resolve, reject) => {
            logout(state.token).then(() => {
                commit('SET_TOKEN', '')
                commit('SET_ROLES', [])
                commit('SET_PERMISSIONS', [])
                removeToken()
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },

    // 前端 登出
    FedLogOut({ commit }) {
        return new Promise(resolve => {
            commit('SET_TOKEN', '')
            removeToken()
            resolve()
        })
    }
}
