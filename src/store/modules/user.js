import api from "@/api"
import { getToken, setToken, removeToken, getUser } from "@/utils/auth";
import { Message } from "element-ui";
import { isEmpty } from "lodash"
// state
const state = {
    gotCode: false,
    user: {},
    token: ""
  }
  // mutations
const mutations = {
    setState(state, params) {
      const { key, data } = params
      state[key] = data
    }
  }
  // getters
const getters = {
    gotCode: state => state.gotCode,
    user: state => state.user,
    isLogged: state => !isEmpty(state.user),
    token: state => state.token
  }
  // actions
const actions = {
  registerUser: async({ commit }, data) => {
    const { user, router } = data
    const userInfo = await api.user.userRegister(user)
    if (parseInt(userInfo.code) === api.successCode) {
      if (user.type === 1) {
        Message.success("用户已注册成功！")
        router.push({ name: "loginLogin" })
      } else {
        Message.success("用户已注册成功！企业用户需要后台审核后才可以登录")
        router.push({ name: "home" })
      }
    } else {
      Message.error(userInfo.msg)
    }
  },
  login: async({ commit }, data) => {
    const user = await api.user.userLogin(data)
    if (parseInt(user.code) === api.successCode) {
      Message.success("用户已登录！")
      commit("setState", { key: "user", data: user.user })
      commit("setState", { key: "token", data: user.access_token })
      setToken(user.access_token, user.user)
    } else {
      Message.error(user.msg)
    }
  },
  logout: ({ commit }) => {
    commit("setState", { key: "user", data: {} })
    removeToken()
    Message.success("用户已退出！")
  },
  resetPwd: async({ commit }, data) => {
    const { info, router } = data
    const user = await api.user.userResetPassword(info)
    if (parseInt(user.code) === api.successCode) {
      Message.success("用户密码已成功修改！")
      router.push({ name: "loginLogin" })
    } else {
      Message.error("密码修改失败！")
    }
  },
  requestEmailCode: async({ commit }, email) => {
    const requestCode = await api.user.userSendEmailCode({ email })
    if (parseInt(requestCode.code) === api.successCode) {
      commit("setState", { key: "gotCode", data: true })
      Message.success("邮箱验证码已发出，15分钟后失效。")
      setTimeout(() => {
        commit("setState", { key: "gotCode", data: false })
      }, 1000 * 60 * 15)
    } else {
      Message.error("获取验证码出错！")
    }
  },
  setGotCode: ({ commit }, status) => {
    commit("setState", { key: "gotCode", data: status })
  },
  setLoggedUser: ({ commit }) => {
    const user = getUser()
    if (!isEmpty(user)) {
      commit("setState", { key: "user", data: user })
      commit("setState", { key: "token", data: getToken() })
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}