import api from "@/api"

// state
const state = {
    news: {
      policy: {},
      dynamic: {},
      activity: {},
    },
    transferList: {},
    achievesList: {},
    friendLinks: [],
    carouselPics: [],
    recommendList: []
  }
  // mutations
const mutations = {
    setNews(state, news) {
      state.news[news.type] = news.content
    },
    setTransferList(state, data) {
      state.transferList = data
    },
    setCollaborationList(state, data) {
      state.achievesList = data
    },
    setState(state, params) {
      const { key, data } = params
      state[key] = data
    },
  }
  // getters
const getters = {
    news: state => state.news,
    transferList: state => state.transferList,
    achievesList: state => state.achievesList,
    friendLinks: state => state.friendLinks,
    carouselPics: state => state.carouselPics,
    recommendList: state => state.recommendList
  }
  // actions
const actions = {
  getNews: async({ commit }, newsType) => {
    const limit = 5,
      page = 1
    const news = await api.news.listNews({ limit, page, type: newsType })
    if (parseInt(news.code) === api.successCode) {
      commit("setNews", { type: newsType, content: {...news, limit, page } })
    }
  },
  getTransferList: async({ commit }) => {
    const limit = 5,
      page = 1,
      orders = "clicks"
    const transferList = await api.transfer.listTransfer({ limit, page, orders })
    if (parseInt(transferList.code) === api.successCode) commit("setTransferList", {...transferList, limit, page, orders })
  },
  getAchievesList: async({ commit }) => {
    const limit = 12,
      page = 1
    const achievesList = await api.achieves.listAchieves({ limit, page })
    if (parseInt(achievesList.code) === api.successCode) commit("setCollaborationList", {...achievesList, limit, page })
  },
  getHomepage: async({ commit }) => {
    getItemFromApi(commit, api.web.getFriendsLinks, "friendLinks")
    getItemFromApi(commit, api.web.getCarouselNewsInfo, "carouselPics")
    getItemFromApi(commit, api.web.getRecommendNewsInfo, "recommendList")
  }
}

const getItemFromApi = async(commit, apiFunc, key) => {
  const res = await apiFunc()
  if (parseInt(res.code) === api.successCode) commit("setState", { key, data: res.data })
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}