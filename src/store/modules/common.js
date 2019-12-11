import api from "@/api"

// state
const state = {
    news: { data: {} },
    optionDict: [],
    catDict: [],
    flatCatDict: [],
    transferOptionsDict: [],
    transferOptions: [],
  }
  // mutations
const mutations = {
    setState(state, params) {
      const { key, data } = params
      state[key] = data
    },
  }
  // getters
const getters = {
    news: state => state.news.data,
    transferOptionsDict: state => state.transferOptionsDict,
    transferOptions: state => state.transferOptions,
    catDict: state => state.catDict,
    flatCatDict: state => state.flatCatDict
  }
  // actions
const actions = {
  getNews: async({ commit }, id) => {
    const news = await api.news.getNews({ id })
    if (parseInt(news.code) === api.successCode) commit("setState", { key: "news", data: news })
  },
  getSockets: async({ commit }) => {
    const newOptions = await api.web.listAllDict()
    if (parseInt(newOptions.code) === api.successCode) commit("setState", { key: "optionDict", data: newOptions.data })

    const newMenus = await api.web.listAllCategory()
    if (parseInt(newMenus.code) === api.successCode) {
      commit("setState", { key: "catDict", data: newMenus.data })
      const childDict = newMenus.data.reduce((accu, p) => [...accu, ...(p.childs || [])], [])
      const flatDict = []
      newMenus.data.forEach(c => {
        flatDict[c.id] = c
      })
      childDict.forEach(c => {
        flatDict[c.id] = c
      })
      commit("setState", { key: "flatCatDict", data: flatDict })
      commit("setState", { key: "childDict", data: childDict })
    }

    const transferOptions = newOptions.data.map(d => {
      const res = {
        name: d.dictName,
        key: d.code,
        options: d.dictionaryDataList.map(data => ({
          name: data.dictdataName,
          key: data.dictDataId
        }))
      }
      return res
    })
    const transferOptionsDict = {}
    transferOptions.forEach(group => {
      const options = {}
      group.options.forEach(o => options[o.key] = {
        name: o.name
      })
      transferOptionsDict[group.key] = { name: group.name, options }
    })
    commit("setState", { key: "transferOptions", data: transferOptions })
    commit("setState", { key: "transferOptionsDict", data: transferOptionsDict })
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