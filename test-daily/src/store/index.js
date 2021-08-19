import { createStore } from 'vuex'

export default createStore({
  state: {
    settings:{
      starttime: undefined,
      lang:undefined
    }
  },
  getters:{
    savedSettings:(state) =>{
      return state.settings;
    }
  },
  mutations: {
    saveSettings:(state, payLoad) => {
      state.settings = payLoad;
    }
  },
  actions: {
    saveSettings:({commit}, payLoad) => {
      commit('saveSettings',payLoad);
    }
  },
  modules: {
  }
})
