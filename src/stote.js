import Vue from 'vue'
import Vuex from './vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: 'hello, vuex-simple',
    count: 1
  },
  getters: {
    count(state) {
      return state.count
    }
  },
  mutations: {
    change(state) {
      console.log(state.count)
      state.count += 10
    }
  },
  actions: {
    change({ commit }) {
      // 模拟异步
      setTimeout(() => {
        commit('change')
      }, 1000)
    }
  }
})
